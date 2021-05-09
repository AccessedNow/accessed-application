(this["webpackJsonpanymay-app"]=this["webpackJsonpanymay-app"]||[]).push([[148],{2598:function(e,a,t){"use strict";t.r(a),a.default="const locale = {\n\tAPP_TITLE: 'Mailbox',\n\tCOMPOSE: 'COMPOSE',\n\tFOLDERS: 'FOLDERS',\n\tFILTERS: 'FILTERS',\n\tLABELS: 'LABELS',\n\tNO_MESSAGES: 'There are no messages!',\n\tNO_RECORDS: 'There are no records!',\n\tSEARCH_PLACEHOLDER: 'Search for an e-mail or contact',\n\tINBOX: 'Inbox',\n\tSENT: 'Sent',\n\tDRAFTS: 'Drafts',\n\tSPAM: 'Spam',\n\tTRASH: 'Trash',\n\tSTARRED: 'Starred',\n\tIMPORTANT: 'Important'\n};\n\nexport default locale;\n"},2599:function(e,a,t){"use strict";t.r(a),a.default="import i18next from 'i18next';\nimport React from 'react';\nimport { Redirect } from 'react-router-dom';\nimport ar from './i18n/ar';\nimport en from './i18n/en';\nimport tr from './i18n/tr';\n\ni18next.addResourceBundle('en', 'mailApp', en);\ni18next.addResourceBundle('tr', 'mailApp', tr);\ni18next.addResourceBundle('ar', 'mailApp', ar);\n\nconst MailAppConfig = {\n\tsettings: {\n\t\tlayout: {}\n\t},\n\troutes: [\n\t\t{\n\t\t\tpath: [\n\t\t\t\t'/apps/mail/label/:labelHandle/:mailId?',\n\t\t\t\t'/apps/mail/filter/:filterHandle/:mailId?',\n\t\t\t\t'/apps/mail/:folderHandle/:mailId?'\n\t\t\t],\n\t\t\tcomponent: React.lazy(() => import('./MailApp'))\n\t\t},\n\t\t{\n\t\t\tpath: '/apps/mail',\n\t\t\tcomponent: () => <Redirect to=\"/apps/mail/inbox\" />\n\t\t}\n\t]\n};\n\nexport default MailAppConfig;\n"},2727:function(e,a,t){"use strict";t.r(a);var n=t(127),o=t(134),r=t(0),l=t.n(r);a.default=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{variant:"h4",className:"mb-24"},"Multi Language"),l.a.createElement(o.a,{className:"mb-16",component:"p"},"Fuse React uses"," ",l.a.createElement("a",{href:"https://react.i18next.com/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("code",null,"react-i18next"))," ","for to support multiple languages."),l.a.createElement(o.a,{className:"mb-16 p-16 border-1 bg-yellow-50 rounded-8 text-gray-800",component:"p"},"Since not everybody need multi-language setup for their apps, we decided NOT to put translations everywhere. If you want to see the translations in action, visit the Mail app, and then change the language from the Toolbar. Mail app is the only app that has translations for demonstration purposes. You can look at its source code to see the usage."),l.a.createElement(o.a,{className:"mb-8",variant:"h5"},"Usage"),l.a.createElement(o.a,{className:"mb-16",component:"p"},"In order to use the translations, create your translation file within the folder you want to use the translations. For example, for the Mail app, create ",l.a.createElement("code",null,"i18n/en.js")," file inside the",l.a.createElement("code",null,"apps/mail")," folder."),l.a.createElement(n.a,{component:"pre",className:"language-jsx mb-24"},t(2598)),l.a.createElement(o.a,{className:"mb-16",component:"p"},"And register the language file with ",l.a.createElement("code",null,"i18next.addResourceBundle()")," at",l.a.createElement("code",null,"src/app/main/apps/mail/MailAppConfig.js")),l.a.createElement(n.a,{component:"pre",className:"language-jsx mb-24"},t(2599)),l.a.createElement(o.a,{className:"mb-16",component:"p"},"And use in a component with ",l.a.createElement("code",null,"useTranslation")," hook as below:"),l.a.createElement(n.a,{component:"pre",className:"language-jsx mb-24"},'\n                        import {useTranslation} from \'react-i18next\';\n\n                        const {t} = useTranslation(\'mailApp\');\n                    \n                        return (\n                            <div className="p-24">\n                                <Button\n                                    variant="contained"\n                                    color="primary"\n                                    className="w-full"\n                                    onClick={handleOpenDialog}\n                                >\n                                    {t(\'COMPOSE\')}\n                                </Button>\n                        '),l.a.createElement(o.a,{className:"mb-8",variant:"h5"},"Changing Language"),l.a.createElement(o.a,{className:"mb-16",component:"p"},"You should use ",l.a.createElement("code",null,"changeLanguage")," redux action to change language:"),l.a.createElement(n.a,{component:"pre",className:"language-jsx mb-24"},"\n                           import { changeLanguage } from 'app/store/i18nSlice';\n\n                            .\n                            .\n\n                            dispatch(changeLanguage(lng.id));\n                        "),l.a.createElement(o.a,{className:"mb-16",component:"p"},"Checkout example usage at",l.a.createElement("code",null,"src/app/fuse-layouts/shared-components/LanguageSwitcher.js")))}}}]);