var ConfiguraBotoesCompartilhamento = function () {
    return {
        Init: function (pathname) {
            var classFb = ''; var classTw = ''; var classGp = ''; var classLk = ''; var classPt = '';
            switch (pathname) {
                case "/":
                case "/home":

                    break;
                case "/curso-ingles":
                    classFb = 'ingles-facebook';
                    classTw = 'ingles-twitter';
                    classGp = 'ingles-google-plus';
                    classLk = 'ingles-linkedin';
                    classPt = 'inglês-pinterest';
                    break;

                case "/curso-ingles/criancas":
                    classFb = 'ingles-criancas-facebook';
                    classTw = 'ingles-criancas-twitter';
                    classGp = 'ingles-criancas-google-plus';
                    classLk = 'ingles-criancas-linkedin';
                    classPt = 'ingles-criancas-pinterest';
                    break;
                case "/curso-ingles/adolescentes":
                    classFb = 'ingles-adolescentes-facebook';
                    classTw = 'ingles-adolescentes-twitter';
                    classGp = 'ingles-adolescentes-google-plus';
                    classLk = 'ingles-adolescentes-linkedin';
                    classPt = 'ingles-adolescentes-pinterest';
                    break;

                case "/curso-ingles/adultos":
                    classFb = 'ingles-adultos-facebook';
                    classTw = 'ingles-adultos-twitter';
                    classGp = 'ingles-adultos-google-plus';
                    classLk = 'ingles-adultos-linkedin';
                    classPt = 'ingles-adultos-pinterest';
                    break;

                case "/curso-ingles/cna-fast":
                    classFb = 'ingles-fast-facebook';
                    classTw = 'ingles-fast-twitter';
                    classGp = 'ingles-fast-google-plus';
                    classLk = 'ingles-fast-linkedin';
                    classPt = 'ingles-fast-pinterest';
                    break;

                case "/curso-ingles/cna-go":
                    classFb = 'ingles-go-facebook';
                    classTw = 'ingles-go-twitter';
                    classGp = 'ingles-go-google-plus';
                    classLk = 'ingles-go-linkedin';
                    classPt = 'ingles-go-pinterest';
                    break;

                case "/curso-espanhol":
                    classFb = 'espanhol-facebook';
                    classTw = 'espanhol-twitter';
                    classGp = 'espanhol-google-plus';
                    classLk = 'espanhol-linkedin';
                    classPt = 'espanhol-pinterest';
                    break;


                case "/curso-espanhol/adolescentes":
                    classFb = 'espanhol-adolescentes-facebook';
                    classTw = 'espanhol-adolescentes-twitter';
                    classGp = 'espanhol-adolescentes-google-plus';
                    classLk = 'espanhol-adolescentes-linkedin';
                    classPt = 'espanhol-adolescentes-pinterest';
                    break


                case "/curso-espanhol/adultos":
                    classFb = 'espanhol-adultos-facebook';
                    classTw = 'espanhol-adultos-twitter';
                    classGp = 'espanhol-adultos-google-plus';
                    classLk = 'espanhol-adultos-linkedin';
                    classPt = 'espanhol-adultos-pinterest';
                    break;


                case "/sobre-cna/conheca-o-cna":
                    classFb = 'conheca-o-CNA-facebook';
                    classTw = 'conheca-o-CNA-twitter';
                    classGp = 'conheca-o-CNA-google-plus';
                    classLk = 'conheca-o-CNA-linkedin';
                    classPt = 'conheca-o-CNA-pinterest';
                    break;

                case "/sobre-cna/noticias":
                    classFb = 'noticias-facebook';
                    classTw = 'noticias-twitter';
                    classGp = 'noticias-google-plus';
                    classLk = 'noticias-linkedin';
                    classPt = 'noticias-pinterest';
                    break;

                case "/sobre-cna/exchange":
                    classFb = 'speaking-exchange-facebook';
                    classTw = 'speaking-exchange-twitter';
                    classGp = 'speaking-exchange-google-plus';
                    classLk = 'speaking-exchange-linkedin';
                    classPt = 'speaking-exchange-pinterest';
                    break;

                case "/sobre-cna/responsabilidade-social":
                    classFb = 'resp-social-facebook';
                    classTw = 'resp-social-twitter';
                    classGp = 'resp-social-google-plus';
                    classLk = 'resp-social-linkedin';
                    classPt = 'resp-social-pinterest';
                    break;

                case "/seja-fluente/certificacao-de-cambridge":
                    classFb = 'cambridge-facebook';
                    classTw = 'cambridge-twitter';
                    classGp = 'cambridge-google-plus';
                    classLk = 'cambridge-linkedin';
                    classPt = 'cambridge-pinterest';
                    break;

                case "/seja-fluente/certificacao-dele":
                    classFb = 'DELE-facebook';
                    classTw = 'DELE-twitter';
                    classGp = 'DELE-google-plus';
                    classLk = 'DELE-linkedin';
                    classPt = 'DELE-pinterest';
                    break;

                case "/seja-fluente/intercambio":
                    classFb = 'intercambio-facebook';
                    classTw = 'intercambio-twitter';
                    classGp = 'intercambio-google-plus';
                    classLk = 'intercambio-linkedin';
                    classPt = 'intercambio-pinterest';
                    break;

                case "/seja-fluente/cna360":
                    classFb = 'CNA-360-facebook';
                    classTw = 'CNA-360-twitter';
                    classGp = 'CNA-360-google-plus';
                    classLk = 'CNA-360-linkedin';
                    classPt = 'CNA-360-pinterest';
                    break;


                case "/cnaola":
                    classFb = 'CNA-ola-facebook';
                    classTw = 'CNA-ola-twitter';
                    classGp = 'CNA-ola-google-plus';
                    classLk = 'CNA-ola-linkedin';
                    classPt = 'CNA-ola-pinterest';
                    break;

                case "/contato/fale-conosco/central-de-relacionamento":
                    classFb = 'relacionamento-facebook';
                    classTw = 'relacionamento-twitter';
                    classGp = 'relacionamento-google-plus';
                    classLk = 'relacionamento-linkedin';
                    classPt = 'relacionamento-pinterest';
                    break;

                case "/contato/fale-conosco/franquia":
                    classFb = 'franquia-facebook';
                    classTw = 'franquia-twitter';
                    classGp = 'franquia-google-plus';
                    classLk = 'franquia-linkedin';
                    classPt = 'franquia-pinterest';
                    break;

                case "/contato/convenios-e-parceiros":
                    classFb = 'convenios-parcerias-facebook';
                    classTw = 'convenios-parcerias-twitter';
                    classGp = 'convenios-parcerias-google-plus';
                    classLk = 'convenios-parcerias-linkedin';
                    classPt = 'convenios-parcerias-pinterest';
                    break;

                case "/contato/convenios-e-parceiros/formulario":
                    classFb = 'form-convenios-parcerias-facebook';
                    classTw = 'form-convenios-parcerias-twitter';
                    classGp = 'form-convenios-parcerias-google-plus';
                    classLk = 'form-convenios-parcerias-linkedin';
                    classPt = 'form-convenios-parcerias-pinterest';
                    break;

                case "/contato/fale-conosco/assessoria":
                    classFb = 'assessoria-imprensa-facebook';
                    classTw = 'assessoria-imprensa-twitter';
                    classGp = 'assessoria-imprensa-google-plus';
                    classLk = 'assessoria-imprensa-linkedin';
                    classPt = 'assessoria-imprensa-pinterest';
                    break;

                case "/contato/trabalhe-conosco":
                    classFb = 'trabalhe-conosco-facebook';
                    classTw = 'trabalhe-conosco-twitter';
                    classGp = 'trabalhe-conosco-google-plus';
                    classLk = 'trabalhe-conosco-linkedin';
                    classPt = 'trabalhe-conosco-pinterest';
                    break;
            }

            setTimeout(function () {
                $('.at-svc-facebook').addClass(classFb);
                $('.at-svc-twitter').addClass(classTw);
                $('.at-svc-google_plusone_share').addClass(classGp);
                $('.at-svc-linkedin').addClass(classLk);
                $('.at-svc-pinterest_share').addClass(classPt);
            }, 3000);
        }
    }
}();