import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.umd.js';
    
document.documentElement.classList.add('cc--darkmode');
async function verifyRecaptcha(token, action) {
    const response = await fetch('/verify-token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token: token, action: action })
    });

    const data = await response.json();
    console.log(data);
}


CookieConsent.run({
    
    guiOptions: {
        consentModal: {
            layout: "cloud",
            position: "bottom center",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true
        },
        analytics: {
            readOnly: false
        },
        advertising: {
            readOnly: false
        }
    },
    language: {
        default: 'en',
        translations: {
            'en': {
                consentModal: {
                    title: "Gizliliğinize Önem Veriyoruz",
                    description: "İnternet sitemizde, içeriğin tarafınıza sağlanması, İnternet Sitemizin performansının optimize edilmesi ve ziyaretçi profilinin anlaşılması için gerekli olan çerezler kullanılmaktadır. İnternet Sitemiz üzerinde kullanılan çerezler hakkında detaylı bilgi almak için <a class=\"cc-link\" href=\"https://akyatirim.com.tr/cerez-politikasi.aspx\">Çerez Politikamızı</a> incelemenizi rica ederiz. Çerezlere dair tercihlerinizi panel vasıtasıyla yönetmeniz mümkündür.",
                    acceptAllBtn: "Tümünü kabul et",
                    acceptNecessaryBtn: "Tümünü reddet",
                    showPreferencesBtn: "Tercihleri ​​yönet"
                },
                preferencesModal: {
                    title: "Çerez Ayarları",
                    acceptAllBtn: "Tümünü kabul et",
                    acceptNecessaryBtn: "Tümünü reddet",
                    savePreferencesBtn: "Tercihleri kaydet",
                    closeIconLabel: "Kapat",
                    sections: [
                        {
                            title: "Çerez Kullanımı",
                            description: "Aşağıda sitemiz üzerinde kullanılan çerez türlerini görebilir ve ihtiyacınıza uygun şekilde bu çerezleri yönetebilirsini. Daha fazla bilgi için lütfen <a class=\"cc-link\" href=\"https://akyatirim.com.tr/cerez-politikasi.aspx\">çerez politikamızı</a> göz atınız."
                        },
                        {
                            title: "Gerekli Çerezler",
                            description: "Gerekli çerezler websitesinin doğru çalışabilmesi ve veri güvenliği için gerekli çerezler tutmaktayız. Bu çerezler sitemizin çalışabilmesi için gereklidir.",
                            linkedCategory: "necessary",
                            cookieTable: {
                                headers: {
                                    name: "İsim",
                                    domain: "Servis",
                                    expiration: "Sona erme"
                                },
                                body: [
                                    {
                                        name: "_GRECAPTCHA",
                                        domain: "www.recaptcha.net",
                                        expiration: "6 ay"
                                    },
                                    
                                ]
                            }
                        },
                        {
                            title: "Analiz & Performans çerezleri",
                            description: "Analiz & Performans çerezleri websitesine ziyaret eden kullanıcıların, site içerisindeki dolaşımlarını kayıt altına alır. Bu kayıtlar site kullanım raporları ve kullanıcının daha iyi bir site performansı alması için kullanılır.",
                            linkedCategory: "analytics",
                            cookieTable: {
                                headers: {
                                    name: "İsim",
                                    domain: "Servis",
                                    expiration: "Sona erme"
                                },
                                body: [
                                    {
                                        name: "_ga",
                                        domain: "idealdata.com.tr",
                                        expiration: "2 yıl"
                                    },
                                    {
                                        name: " _ga_<container-id>",
                                        domain: " idealdata.com.tr",
                                        expiration: "2 yıl"
                                    },
                                    {
                                        name: "AEC",
                                        domain: "google.com ",
                                        expiration: "6 ay"
                                    },
                                    {
                                        name: "OGP ",
                                        domain: "google.com ",
                                        expiration: "2 ay"
                                    },
                                    {
                                        name: "OGPC ",
                                        domain: "google.com ",
                                        expiration: "2 ay"
                                    }
                                ]
                            }
                        },
                        {
                            title: "Hedefleme & Reklam Çerezleri",
                            description: "Hedefleme ve Reklam çerezlerini etkisiz hale getirirseniz, bu site üzerindeki tüm reklam çerezlerinizi engellemiş olursunuz.",
                            linkedCategory: "advertising",
                            cookieTable: {
                                headers: {
                                    name: "İsim",
                                    domain: "Servis",
                                    expiration: "Sona erme"
                                },
                                body: [
                                    {
                                        name: "APISID ",
                                        domain: "google.com ",
                                        expiration: "2 yıl "
                                    },
                                    {
                                        name: "DV ",
                                        domain: "google.com ",
                                        expiration: "1 gün "
                                    },
                                    {
                                        name: "HSID ",
                                        domain: "google.com ",
                                        expiration: "1 gün"
                                    },
                                    {
                                        name: "NID ",
                                        domain: "google.com ",
                                        expiration: "6 ay"
                                    },
                                    {
                                        name: "OTZ ",
                                        domain: "google.com ",
                                        expiration: "1 gün"
                                    },
                                    {
                                        name: " SEARCH_SAMESITE ",
                                        domain: "google.com ",
                                        expiration: "4 ay"
                                    },
                                    {
                                        name: " SID ",
                                        domain: "google.com ",
                                        expiration: "2 yıl"
                                    },
                                    {
                                        name: " SIDCC ",
                                        domain: "google.com ",
                                        expiration: "1 yıl"
                                    },
                                    {
                                        name: " SOCS ",
                                        domain: "google.com ",
                                        expiration: "13 ay"
                                    },
                                    {
                                        name: " SSID ",
                                        domain: "google.com ",
                                        expiration: "13 ay"
                                    },
                                    {
                                        name: " __Secure-1PAPISID ",
                                        domain: "google.com ",
                                        expiration: "2 yıl"
                                    },
                                    {
                                        name: " __Secure-1PSID ",
                                        domain: "google.com ",
                                        expiration: "2 yıl"
                                    },
                                    {
                                        name: "__Secure-1PSIDCC ",
                                        domain: "google.com ",
                                        expiration: "1 yıl"
                                    },
                                    {
                                        name: "__Secure-1PSIDTS",
                                        domain: "google.com ",
                                        expiration: "1 yıl"
                                    },
                                    {
                                        name: " __Secure-3PAPISID ",
                                        domain: "google.com ",
                                        expiration: "1 yıl"
                                    },
                                    {
                                        name: "  __Secure-3PSID ",
                                        domain: "google.com ",
                                        expiration: "1 yıl"
                                    },
                                    {
                                        name: "  __Secure-3PSIDCC ",
                                        domain: "google.com ",
                                        expiration: "1 yıl"
                                    },
                                    {
                                        name: "__Secure-3PSIDTS ",
                                        domain: "google.com ",
                                        expiration: "1 yıl "
                                    },
                                    {
                                        name: " __Secure-ENID ",
                                        domain: "google.com ",
                                        expiration: "1 yıl"
                                    }
                                ]
                            }
                        },
                        {
                            title: "Gizliliğinize Önem Veriyoruz",
                            description: "Daha fazla bilgi için <a class=\"cc-link\" href=\"https://akyatirim.com.tr/cerez-politikasi.aspx\">çerez politikalarımızı</a> inceleyebilir ya da bizimle <a class=\"cc-link\" href=\"https://www.tradeall.com/iletisim.aspx\">iletişime geçebilirsiniz.</a>"
                        }
                    ]
                }
            }
        }
    }
});


