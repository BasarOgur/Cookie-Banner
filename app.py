from flask import Flask, render_template, request, jsonify
from google.cloud import recaptchaenterprise_v1

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')  

@app.route('/verify-recaptcha', methods=['POST'])
def verify_recaptcha():
    data = request.json
    token = data.get('token')
    recaptcha_action = data.get('action')

   
    response = create_assessment(
        project_id='cerez-uygulamasi-1722512841859',
        recaptcha_key='your-key',
        token=token,
        recaptcha_action=recaptcha_action
    )
    return jsonify(response)

def create_assessment(project_id, recaptcha_key, token, recaptcha_action):
    client = recaptchaenterprise_v1.RecaptchaEnterpriseServiceClient()

    event = recaptchaenterprise_v1.Event()
    event.site_key = recaptcha_key
    event.token = token

    assessment = recaptchaenterprise_v1.Assessment()
    assessment.event = event

    project_name = f"projects/{project_id}"

    request = recaptchaenterprise_v1.CreateAssessmentRequest()
    request.assessment = assessment
    request.parent = project_name

    response = client.create_assessment(request)

    if not response.token_properties.valid:
        return {
            "error": "The token is invalid.",
            "invalid_reason": str(response.token_properties.invalid_reason)
        }

    if response.token_properties.action != recaptcha_action:
        return {
            "error": "The action attribute does not match."
        }
    
    return {
        "score": response.risk_analysis.score,
        "reasons": list(response.risk_analysis.reasons)
    }

if __name__ == '__main__':
    app.run(debug=True)
