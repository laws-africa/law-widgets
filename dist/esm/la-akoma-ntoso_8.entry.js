import { r as registerInstance, g as getElement, c as createEvent, h, H as Host } from './index-769d63d0.js';
import { g as getAkomaNtosoElement, t as tippy } from './tippy.esm-cd78894f.js';

const akomaNtosoCss = "@import url(\"https://fonts.googleapis.com/css?family=PT+Serif:400,400i,700,700i\");@import url(\"https://fonts.googleapis.com/css?family=PT+Serif:400,400i,700,700i\");la-akoma-ntoso{display:block;font-family:Palatino, \"Book Antiqua\", \"PT Serif\", Georgia, serif;font-size:15px;line-height:1.35;}@-webkit-keyframes fadeout{from{background-color:yellow}to{background-color:unset}}@keyframes fadeout{from{background-color:yellow}to{background-color:unset}}la-akoma-ntoso.flash-target :target{-webkit-animation:fadeout 2s;animation:fadeout 2s}la-akoma-ntoso .akn-blockContainer{display:block}la-akoma-ntoso .akn-block{display:block}la-akoma-ntoso .akn-blockList{display:block}la-akoma-ntoso .akn-conclusions{display:block}la-akoma-ntoso .akn-coverPage{display:block}la-akoma-ntoso .akn-foreign{display:block}la-akoma-ntoso .akn-item{display:block}la-akoma-ntoso .akn-ol{display:block}la-akoma-ntoso .akn-p{display:block}la-akoma-ntoso .akn-preamble{display:block}la-akoma-ntoso .akn-preface{display:block}la-akoma-ntoso .akn-tblock{display:block}la-akoma-ntoso .akn-toc{display:block}la-akoma-ntoso .akn-ul{display:block}la-akoma-ntoso .akn-preface,la-akoma-ntoso .akn-preamble{margin-bottom:1.6em}la-akoma-ntoso .akn-preface>.akn-p,la-akoma-ntoso .akn-preamble>.akn-p{margin-bottom:0.8em}la-akoma-ntoso .akn-listIntroduction,la-akoma-ntoso .akn-p{display:block;margin-bottom:0.8em}la-akoma-ntoso .akn-blockList>.akn-item{padding-left:3em;margin-bottom:0.8em}la-akoma-ntoso .akn-blockList>.akn-item>.akn-num{display:block;float:left;margin-left:-3em;margin-right:0.25em}la-akoma-ntoso .akn-ul,la-akoma-ntoso .akn-ol{list-style-position:outside;padding-left:3em;margin-bottom:0.8em}la-akoma-ntoso .akn-ul{list-style-type:disc}la-akoma-ntoso .akn-ol{list-style-type:arabic}la-akoma-ntoso .akn-li{display:list-item;margin-bottom:0.8em}la-akoma-ntoso .akn-akomaNtoso{display:block}la-akoma-ntoso .akn-act{display:block}la-akoma-ntoso .akn-amendment{display:block}la-akoma-ntoso .akn-amendmentList{display:block}la-akoma-ntoso .akn-bill{display:block}la-akoma-ntoso .akn-components{display:block}la-akoma-ntoso .akn-debate{display:block}la-akoma-ntoso .akn-debateReport{display:block}la-akoma-ntoso .akn-doc{display:block}la-akoma-ntoso .akn-documentCollection{display:block}la-akoma-ntoso .akn-judgment{display:block}la-akoma-ntoso .akn-officialGazette{display:block}la-akoma-ntoso .akn-portion{display:block}la-akoma-ntoso .akn-statement{display:block}la-akoma-ntoso .coverpage{text-align:center;margin-bottom:1.6em}la-akoma-ntoso .coverpage .notice-list{margin:0px;padding:0px}la-akoma-ntoso .coverpage .notice-list li{list-style:none}la-akoma-ntoso .coverpage .place-name,la-akoma-ntoso .coverpage .parent-work{font-size:19px;line-height:1.2;margin-bottom:0.8em;font-weight:bold}la-akoma-ntoso .coverpage .assent-date,la-akoma-ntoso .coverpage .commencement-date{margin-bottom:0.8em;font-weight:bold}la-akoma-ntoso .coverpage .commencement-date-list{margin-bottom:0.8em}la-akoma-ntoso .coverpage .commencement-date-uncommenced{margin-bottom:0.8em;font-weight:bold}la-akoma-ntoso .coverpage .commencements-table{margin:auto;max-width:80%}la-akoma-ntoso .coverpage .amendment-list{margin-top:1.6em;padding:0px}la-akoma-ntoso .coverpage .amendment{list-style:none;margin-bottom:0.8em;font-style:italic}la-akoma-ntoso .coverpage .commencement-note,la-akoma-ntoso .coverpage .verification-notice,la-akoma-ntoso .coverpage .as-at-date-notice{margin-top:0.8em;font-style:italic}la-akoma-ntoso h1,la-akoma-ntoso h2,la-akoma-ntoso h3,la-akoma-ntoso h4,la-akoma-ntoso h5,la-akoma-ntoso .akn-heading{margin-top:0px;margin-bottom:0.8em;font-family:Palatino, \"Book Antiqua\", \"PT Serif\", Georgia, serif;font-weight:bold}la-akoma-ntoso h1{font-size:26px;line-height:1.2}la-akoma-ntoso h2,la-akoma-ntoso .akn-heading{text-align:center;font-size:19px;line-height:1.2}la-akoma-ntoso h3{font-size:18px;line-height:1.35}la-akoma-ntoso h4{font-size:15px;line-height:1.35}la-akoma-ntoso .akn-subheading,la-akoma-ntoso .akn-crossHeading{text-align:center;font-style:italic}la-akoma-ntoso .akn-attachment>.akn-subheading{font-style:normal}la-akoma-ntoso .akn-alinea{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-article{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-book{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-chapter{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-clause{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-division{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-hcontainer{display:block;margin-bottom:0.8em}la-akoma-ntoso .akn-indent{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-level{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-list{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-paragraph{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-part{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-point{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-proviso{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-rule{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-section{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-subchapter{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-subclause{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-subdivision{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-sublist{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-subparagraph{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-subpart{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-subrule{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-subsection{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-subtitle{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-title{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-tome{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-transitional{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-crossHeading{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-subsection,la-akoma-ntoso .akn-paragraph,la-akoma-ntoso .akn-subrule,la-akoma-ntoso .akn-subparagraph{padding-left:3em;margin-bottom:0.8em}la-akoma-ntoso .akn-subsection.akn--no-indent,la-akoma-ntoso .akn-paragraph.akn--no-indent,la-akoma-ntoso .akn-subrule.akn--no-indent,la-akoma-ntoso .akn-subparagraph.akn--no-indent{padding-left:0px}la-akoma-ntoso .akn-subsection>.akn-num,la-akoma-ntoso .akn-paragraph>.akn-num,la-akoma-ntoso .akn-subrule>.akn-num,la-akoma-ntoso .akn-subparagraph>.akn-num{display:block;float:left;margin-left:-3em;margin-right:0.25em}la-akoma-ntoso .akn-subsection>.akn-heading,la-akoma-ntoso .akn-paragraph>.akn-heading,la-akoma-ntoso .akn-subrule>.akn-heading,la-akoma-ntoso .akn-subparagraph>.akn-heading{font-size:inherit;text-align:inherit;line-height:inherit}la-akoma-ntoso .akn-list>.akn-intro{display:block;margin-bottom:0.8em}la-akoma-ntoso .akn-list>.akn-point{display:block;margin-left:3em;margin-bottom:0.8em}la-akoma-ntoso .akn-list>.akn-point>.akn-num{display:block;float:left;margin-left:-3em;margin-right:0.25em}la-akoma-ntoso .akn-br{display:block}la-akoma-ntoso .akn-def{font-weight:bold}la-akoma-ntoso .akn-longTitle{display:block;font-weight:bold;margin-bottom:0.8em}la-akoma-ntoso .akn-remark{font-style:italic}la-akoma-ntoso img{max-width:100%}la-akoma-ntoso .akn-ins{text-decoration:underline}la-akoma-ntoso .akn-del{text-decoration:line-through}la-akoma-ntoso .akn-authorialNote{display:-ms-flexbox;display:flex;font-size:small;margin-top:0.4em;padding:0.25em 0.25em 0 0.25em;position:relative;background-color:rgba(0, 0, 0, 0.07)}la-akoma-ntoso .akn-authorialNote::before{content:\" \";position:absolute;top:0;left:0;border-top:1px solid black;width:15%}la-akoma-ntoso .akn-authorialNote+.akn-authorialNote{margin-top:0px}la-akoma-ntoso .akn-authorialNote+.akn-authorialNote::before{border-top:0px}la-akoma-ntoso .akn-authorialNote>.akn-authorialNote--marker{margin-right:0.5em}la-akoma-ntoso .akn-embeddedStructure{display:block;margin-left:2em}la-akoma-ntoso .akn-embeddedStructure .akn-embeddedStructure--startQuote{margin-left:-0.5em;float:left}la-akoma-ntoso .akn--table-container{max-width:100%;overflow-y:auto}la-akoma-ntoso table{width:100%;margin-bottom:1.6em;border:1px solid #ddd;border-collapse:collapse}la-akoma-ntoso table th,la-akoma-ntoso table td{border-top:1px solid #ddd;border-left:1px solid #ddd;padding:5px;text-align:left;vertical-align:top}la-akoma-ntoso table th{font-weight:bold}la-akoma-ntoso table th>:last-child,la-akoma-ntoso table td>:last-child{margin-bottom:0px}la-akoma-ntoso table thead th{vertical-align:bottom}la-akoma-ntoso table caption+thead tr:first-child th,la-akoma-ntoso table caption+thead tr:first-child td,la-akoma-ntoso table colgroup+thead tr:first-child th,la-akoma-ntoso table colgroup+thead tr:first-child td,la-akoma-ntoso table thead:first-child tr:first-child th,la-akoma-ntoso table thead:first-child tr:first-child td{border-top:0}la-akoma-ntoso table tbody+tbody{border-top:2px solid #ddd}la-akoma-ntoso .akn--text-left{text-align:left}la-akoma-ntoso .akn--text-center{text-align:center}la-akoma-ntoso .akn--text-right{text-align:right}la-akoma-ntoso[frbr-country^=ke]{}la-akoma-ntoso[frbr-country^=ke] .akn-remark,la-akoma-ntoso[frbr-country^=ke] .akn-crossHeading{font-style:normal}la-akoma-ntoso[frbr-country^=ke] .coverpage .amendment,la-akoma-ntoso[frbr-country^=ke] .coverpage .verification-notice,la-akoma-ntoso[frbr-country^=ke] .coverpage .as-at-date-notice{font-style:normal}la-akoma-ntoso[frbr-country^=ke] .akn-listIntroduction>.akn-remark:only-child,la-akoma-ntoso[frbr-country^=ke] .akn-p>.akn-remark:only-child{display:block;margin-top:0.8em;text-align:center}la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .akn-division .akn-heading,la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .akn-paragraph .akn-heading{text-align:start;font-size:15px;line-height:1.35}la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .akn-heading,la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .akn-subheading{margin-bottom:0.8em}la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .akn-judgmentBody .akn-p,la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .akn-attachments .akn-p{text-align:justify}la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .akn-remark,la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .akn-ref,la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .akn-term{font-style:italic}la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] em{font-style:normal;text-decoration:underline}la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .akn-header{padding-top:1.6em;padding-bottom:3.2em}la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .tausi-header{width:80%;margin-left:auto;margin-right:auto;margin-bottom:1.6em;font-weight:bold;text-align:center}la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .tausi-header .doc-title,la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .tausi-header .neutral-citation{margin-bottom:0.8em}la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .tausi-header .doc-date,la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .tausi-header .judges,la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .tausi-header .docket-number,la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .tausi-header .extra-text,la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .tausi-header .doc-authority{margin-bottom:0.8em;text-transform:uppercase}la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .tausi-header .legacy-citation{margin-bottom:0.8em;font-weight:normal;font-style:italic}la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .tausi-header .republic-head,la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .tausi-header .parties-separator{margin-top:1.6em;margin-bottom:0.8em;text-transform:uppercase}la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .tausi-header .party-listing{margin-bottom:0.8em;text-transform:uppercase;display:-ms-flexbox;display:flex;-ms-flex-line-pack:end;align-content:flex-end}la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .tausi-header .party-listing .party-name{text-align:left;max-width:60%}la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .tausi-header .party-listing .dotted{-ms-flex-positive:1;flex-grow:1;border-bottom:dotted 1px;margin:6px}la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .tausi-header .header-note{margin-top:1.6em;margin-bottom:0.8em;font-style:italic}la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .summary{text-align:justify}la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .summary .summary-title,la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .summary .author{margin-bottom:0.8em}la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .summary .catchwords,la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .summary .outcome{font-style:italic}la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .summary .akn-h4{font-weight:bold;font-style:normal}la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .introduction .decision-action{text-align:center;margin-top:2.4em;text-transform:uppercase;font-weight:bold}la-akoma-ntoso[frbr-country^=na] .coverpage .amendment-list,la-akoma-ntoso[frbr-country^=na] .coverpage .commencement-date,la-akoma-ntoso[frbr-country^=na] .coverpage .verification-notice,la-akoma-ntoso[frbr-country^=na] .coverpage .as-at-date-notice,la-akoma-ntoso[frbr-country^=na] .coverpage .assent-date{font-style:normal;font-weight:bold;color:#00b156}la-akoma-ntoso[frbr-country^=na] .coverpage .as-at-date-notice,la-akoma-ntoso[frbr-country^=na] .coverpage .amendment,la-akoma-ntoso[frbr-country^=na] .coverpage .commencement-note,la-akoma-ntoso[frbr-country^=na] .coverpage .verification-notice{font-style:normal}la-akoma-ntoso[frbr-country^=na] .akn-remark{font-style:normal;font-weight:bold;color:#00b156}la-akoma-ntoso[frbr-country^=na] .akn-p>.akn-remark:only-child,la-akoma-ntoso[frbr-country^=na] .akn-listIntroduction>.akn-remark:only-child{display:block;margin-top:0.8em;text-align:center}la-akoma-ntoso[frbr-country^=pl]{}la-akoma-ntoso[frbr-country^=pl] .coverpage .doctype{text-transform:uppercase}la-akoma-ntoso[frbr-country^=pl] .akn-intro,la-akoma-ntoso[frbr-country^=pl] .akn-list,la-akoma-ntoso[frbr-country^=pl] .akn-paragraph,la-akoma-ntoso[frbr-country^=pl] .akn-point{margin-bottom:0.8em}la-akoma-ntoso[frbr-country^=pl] .akn-alinea,la-akoma-ntoso[frbr-country^=pl] .akn-indent,la-akoma-ntoso[frbr-country^=pl] .akn-paragraph,la-akoma-ntoso[frbr-country^=pl] .akn-point{margin-left:3em}la-akoma-ntoso[frbr-country^=pl] .akn-alinea>.akn-num,la-akoma-ntoso[frbr-country^=pl] .akn-alinea>.akn-indent-num,la-akoma-ntoso[frbr-country^=pl] .akn-indent>.akn-num,la-akoma-ntoso[frbr-country^=pl] .akn-indent>.akn-indent-num,la-akoma-ntoso[frbr-country^=pl] .akn-paragraph>.akn-num,la-akoma-ntoso[frbr-country^=pl] .akn-paragraph>.akn-indent-num,la-akoma-ntoso[frbr-country^=pl] .akn-point>.akn-num,la-akoma-ntoso[frbr-country^=pl] .akn-point>.akn-indent-num{display:block;float:left;margin-left:-3em}la-akoma-ntoso.show-structure .akn-alinea,la-akoma-ntoso.show-structure-hier .akn-alinea{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #ef9a9a}la-akoma-ntoso.show-structure .akn-alinea::before,la-akoma-ntoso.show-structure-hier .akn-alinea::before{content:\"alinea\";position:absolute;top:0px;left:0px;color:white;background-color:#ef9a9a;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-article,la-akoma-ntoso.show-structure-hier .akn-article{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #efa89a}la-akoma-ntoso.show-structure .akn-article::before,la-akoma-ntoso.show-structure-hier .akn-article::before{content:\"article\";position:absolute;top:0px;left:0px;color:white;background-color:#efa89a;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-book,la-akoma-ntoso.show-structure-hier .akn-book{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #efb69a}la-akoma-ntoso.show-structure .akn-book::before,la-akoma-ntoso.show-structure-hier .akn-book::before{content:\"book\";position:absolute;top:0px;left:0px;color:black;background-color:#efb69a;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-chapter,la-akoma-ntoso.show-structure-hier .akn-chapter{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #efc59a}la-akoma-ntoso.show-structure .akn-chapter::before,la-akoma-ntoso.show-structure-hier .akn-chapter::before{content:\"chapter\";position:absolute;top:0px;left:0px;color:black;background-color:#efc59a;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-clause,la-akoma-ntoso.show-structure-hier .akn-clause{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #efd39a}la-akoma-ntoso.show-structure .akn-clause::before,la-akoma-ntoso.show-structure-hier .akn-clause::before{content:\"clause\";position:absolute;top:0px;left:0px;color:black;background-color:#efd39a;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-division,la-akoma-ntoso.show-structure-hier .akn-division{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #efe19a}la-akoma-ntoso.show-structure .akn-division::before,la-akoma-ntoso.show-structure-hier .akn-division::before{content:\"division\";position:absolute;top:0px;left:0px;color:black;background-color:#efe19a;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-hcontainer,la-akoma-ntoso.show-structure-hier .akn-hcontainer{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #efef9a}la-akoma-ntoso.show-structure .akn-hcontainer::before,la-akoma-ntoso.show-structure-hier .akn-hcontainer::before{content:\"hcontainer\";position:absolute;top:0px;left:0px;color:black;background-color:#efef9a;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-indent,la-akoma-ntoso.show-structure-hier .akn-indent{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #e1ef9a}la-akoma-ntoso.show-structure .akn-indent::before,la-akoma-ntoso.show-structure-hier .akn-indent::before{content:\"indent\";position:absolute;top:0px;left:0px;color:black;background-color:#e1ef9a;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-level,la-akoma-ntoso.show-structure-hier .akn-level{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #d3ef9a}la-akoma-ntoso.show-structure .akn-level::before,la-akoma-ntoso.show-structure-hier .akn-level::before{content:\"level\";position:absolute;top:0px;left:0px;color:black;background-color:#d3ef9a;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-list,la-akoma-ntoso.show-structure-hier .akn-list{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #c5ef9a}la-akoma-ntoso.show-structure .akn-list::before,la-akoma-ntoso.show-structure-hier .akn-list::before{content:\"list\";position:absolute;top:0px;left:0px;color:black;background-color:#c5ef9a;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-paragraph,la-akoma-ntoso.show-structure-hier .akn-paragraph{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #b6ef9a}la-akoma-ntoso.show-structure .akn-paragraph::before,la-akoma-ntoso.show-structure-hier .akn-paragraph::before{content:\"para\";position:absolute;top:0px;left:0px;color:black;background-color:#b6ef9a;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-part,la-akoma-ntoso.show-structure-hier .akn-part{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #a8ef9a}la-akoma-ntoso.show-structure .akn-part::before,la-akoma-ntoso.show-structure-hier .akn-part::before{content:\"part\";position:absolute;top:0px;left:0px;color:black;background-color:#a8ef9a;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-point,la-akoma-ntoso.show-structure-hier .akn-point{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #9aef9a}la-akoma-ntoso.show-structure .akn-point::before,la-akoma-ntoso.show-structure-hier .akn-point::before{content:\"point\";position:absolute;top:0px;left:0px;color:black;background-color:#9aef9a;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-proviso,la-akoma-ntoso.show-structure-hier .akn-proviso{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #9aefa8}la-akoma-ntoso.show-structure .akn-proviso::before,la-akoma-ntoso.show-structure-hier .akn-proviso::before{content:\"proviso\";position:absolute;top:0px;left:0px;color:black;background-color:#9aefa8;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-rule,la-akoma-ntoso.show-structure-hier .akn-rule{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #9aefb6}la-akoma-ntoso.show-structure .akn-rule::before,la-akoma-ntoso.show-structure-hier .akn-rule::before{content:\"rule\";position:absolute;top:0px;left:0px;color:black;background-color:#9aefb6;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-section,la-akoma-ntoso.show-structure-hier .akn-section{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #9aefc5}la-akoma-ntoso.show-structure .akn-section::before,la-akoma-ntoso.show-structure-hier .akn-section::before{content:\"section\";position:absolute;top:0px;left:0px;color:black;background-color:#9aefc5;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-subchapter,la-akoma-ntoso.show-structure-hier .akn-subchapter{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #9aefd3}la-akoma-ntoso.show-structure .akn-subchapter::before,la-akoma-ntoso.show-structure-hier .akn-subchapter::before{content:\"subchapter\";position:absolute;top:0px;left:0px;color:black;background-color:#9aefd3;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-subclause,la-akoma-ntoso.show-structure-hier .akn-subclause{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #9aefe1}la-akoma-ntoso.show-structure .akn-subclause::before,la-akoma-ntoso.show-structure-hier .akn-subclause::before{content:\"subclause\";position:absolute;top:0px;left:0px;color:black;background-color:#9aefe1;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-subdivision,la-akoma-ntoso.show-structure-hier .akn-subdivision{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #9aefef}la-akoma-ntoso.show-structure .akn-subdivision::before,la-akoma-ntoso.show-structure-hier .akn-subdivision::before{content:\"subdivision\";position:absolute;top:0px;left:0px;color:black;background-color:#9aefef;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-sublist,la-akoma-ntoso.show-structure-hier .akn-sublist{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #9ae1ef}la-akoma-ntoso.show-structure .akn-sublist::before,la-akoma-ntoso.show-structure-hier .akn-sublist::before{content:\"sublist\";position:absolute;top:0px;left:0px;color:black;background-color:#9ae1ef;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-subparagraph,la-akoma-ntoso.show-structure-hier .akn-subparagraph{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #9ad3ef}la-akoma-ntoso.show-structure .akn-subparagraph::before,la-akoma-ntoso.show-structure-hier .akn-subparagraph::before{content:\"subpara\";position:absolute;top:0px;left:0px;color:black;background-color:#9ad3ef;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-subpart,la-akoma-ntoso.show-structure-hier .akn-subpart{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #9ac5ef}la-akoma-ntoso.show-structure .akn-subpart::before,la-akoma-ntoso.show-structure-hier .akn-subpart::before{content:\"subpart\";position:absolute;top:0px;left:0px;color:white;background-color:#9ac5ef;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-subrule,la-akoma-ntoso.show-structure-hier .akn-subrule{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #9ab6ef}la-akoma-ntoso.show-structure .akn-subrule::before,la-akoma-ntoso.show-structure-hier .akn-subrule::before{content:\"subrule\";position:absolute;top:0px;left:0px;color:white;background-color:#9ab6ef;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-subsection,la-akoma-ntoso.show-structure-hier .akn-subsection{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #9aa8ef}la-akoma-ntoso.show-structure .akn-subsection::before,la-akoma-ntoso.show-structure-hier .akn-subsection::before{content:\"subsection\";position:absolute;top:0px;left:0px;color:white;background-color:#9aa8ef;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-subtitle,la-akoma-ntoso.show-structure-hier .akn-subtitle{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #9a9aef}la-akoma-ntoso.show-structure .akn-subtitle::before,la-akoma-ntoso.show-structure-hier .akn-subtitle::before{content:\"subtitle\";position:absolute;top:0px;left:0px;color:white;background-color:#9a9aef;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-title,la-akoma-ntoso.show-structure-hier .akn-title{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #a89aef}la-akoma-ntoso.show-structure .akn-title::before,la-akoma-ntoso.show-structure-hier .akn-title::before{content:\"title\";position:absolute;top:0px;left:0px;color:white;background-color:#a89aef;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-tome,la-akoma-ntoso.show-structure-hier .akn-tome{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #b69aef}la-akoma-ntoso.show-structure .akn-tome::before,la-akoma-ntoso.show-structure-hier .akn-tome::before{content:\"tome\";position:absolute;top:0px;left:0px;color:white;background-color:#b69aef;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-transitional,la-akoma-ntoso.show-structure-hier .akn-transitional{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #c59aef}la-akoma-ntoso.show-structure .akn-transitional::before,la-akoma-ntoso.show-structure-hier .akn-transitional::before{content:\"transitional\";position:absolute;top:0px;left:0px;color:white;background-color:#c59aef;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-crossHeading,la-akoma-ntoso.show-structure-hier .akn-crossHeading{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #d39aef}la-akoma-ntoso.show-structure .akn-crossHeading::before,la-akoma-ntoso.show-structure-hier .akn-crossHeading::before{content:\"crossHeading\";position:absolute;top:0px;left:0px;color:white;background-color:#d39aef;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-hcontainer:not([data-name=hcontainer])::before,la-akoma-ntoso.show-structure-hier .akn-hcontainer:not([data-name=hcontainer])::before{content:\"HCONTAINER - \" attr(data-name) !important}la-akoma-ntoso.show-structure .akn-subsection:not(.akn--no-indent),la-akoma-ntoso.show-structure .akn-paragraph:not(.akn--no-indent),la-akoma-ntoso.show-structure .akn-subparagraph:not(.akn--no-indent),la-akoma-ntoso.show-structure .akn-blockList>.akn-item:not(.akn--no-indent),la-akoma-ntoso.show-structure-hier .akn-subsection:not(.akn--no-indent),la-akoma-ntoso.show-structure-hier .akn-paragraph:not(.akn--no-indent),la-akoma-ntoso.show-structure-hier .akn-subparagraph:not(.akn--no-indent),la-akoma-ntoso.show-structure-hier .akn-blockList>.akn-item:not(.akn--no-indent){padding-left:calc(3em + 3px)}la-akoma-ntoso.show-structure .akn-blockContainer,la-akoma-ntoso.show-structure-block .akn-blockContainer{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #efe89a}la-akoma-ntoso.show-structure .akn-blockContainer::before,la-akoma-ntoso.show-structure-block .akn-blockContainer::before{position:absolute;top:0px;left:0px;color:black;background-color:#efe89a;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-block,la-akoma-ntoso.show-structure-block .akn-block{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #e8ef9a}la-akoma-ntoso.show-structure .akn-block::before,la-akoma-ntoso.show-structure-block .akn-block::before{position:absolute;top:0px;left:0px;color:black;background-color:#e8ef9a;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-blockList,la-akoma-ntoso.show-structure-block .akn-blockList{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #daef9a}la-akoma-ntoso.show-structure .akn-blockList::before,la-akoma-ntoso.show-structure-block .akn-blockList::before{content:\"items\";position:absolute;top:0px;left:0px;color:black;background-color:#daef9a;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-conclusions,la-akoma-ntoso.show-structure-block .akn-conclusions{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #ccef9a}la-akoma-ntoso.show-structure .akn-conclusions::before,la-akoma-ntoso.show-structure-block .akn-conclusions::before{position:absolute;top:0px;left:0px;color:black;background-color:#ccef9a;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-coverPage,la-akoma-ntoso.show-structure-block .akn-coverPage{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #bdef9a}la-akoma-ntoso.show-structure .akn-coverPage::before,la-akoma-ntoso.show-structure-block .akn-coverPage::before{position:absolute;top:0px;left:0px;color:black;background-color:#bdef9a;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-foreign,la-akoma-ntoso.show-structure-block .akn-foreign{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #afef9a}la-akoma-ntoso.show-structure .akn-foreign::before,la-akoma-ntoso.show-structure-block .akn-foreign::before{position:absolute;top:0px;left:0px;color:black;background-color:#afef9a;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-item,la-akoma-ntoso.show-structure-block .akn-item{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #a1ef9a}la-akoma-ntoso.show-structure .akn-item::before,la-akoma-ntoso.show-structure-block .akn-item::before{content:\"item\";position:absolute;top:0px;left:0px;color:black;background-color:#a1ef9a;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-ol,la-akoma-ntoso.show-structure-block .akn-ol{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #9aefa1}la-akoma-ntoso.show-structure .akn-ol::before,la-akoma-ntoso.show-structure-block .akn-ol::before{position:absolute;top:0px;left:0px;color:black;background-color:#9aefa1;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-preamble,la-akoma-ntoso.show-structure-block .akn-preamble{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #9aefbd}la-akoma-ntoso.show-structure .akn-preamble::before,la-akoma-ntoso.show-structure-block .akn-preamble::before{content:\"preamble\";position:absolute;top:0px;left:0px;color:black;background-color:#9aefbd;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-preface,la-akoma-ntoso.show-structure-block .akn-preface{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #9aefcc}la-akoma-ntoso.show-structure .akn-preface::before,la-akoma-ntoso.show-structure-block .akn-preface::before{content:\"preface\";position:absolute;top:0px;left:0px;color:black;background-color:#9aefcc;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-tblock,la-akoma-ntoso.show-structure-block .akn-tblock{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #9aefda}la-akoma-ntoso.show-structure .akn-tblock::before,la-akoma-ntoso.show-structure-block .akn-tblock::before{position:absolute;top:0px;left:0px;color:black;background-color:#9aefda;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-toc,la-akoma-ntoso.show-structure-block .akn-toc{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #9aefe8}la-akoma-ntoso.show-structure .akn-toc::before,la-akoma-ntoso.show-structure-block .akn-toc::before{position:absolute;top:0px;left:0px;color:black;background-color:#9aefe8;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-ul,la-akoma-ntoso.show-structure-block .akn-ul{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #9ae8ef}la-akoma-ntoso.show-structure .akn-ul::before,la-akoma-ntoso.show-structure-block .akn-ul::before{content:\"bullets\";position:absolute;top:0px;left:0px;color:black;background-color:#9ae8ef;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn--table-container,la-akoma-ntoso.show-structure-block .akn--table-container{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #efe89a}la-akoma-ntoso.show-structure .akn--table-container::before,la-akoma-ntoso.show-structure-block .akn--table-container::before{content:\"table\";position:absolute;top:0px;left:0px;color:black;background-color:#efe89a;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-abbr,la-akoma-ntoso.show-structure-inline .akn-abbr{background-color:rgba(175, 239, 154, 0.4);position:relative}la-akoma-ntoso.show-structure .akn-abbr:hover::before,la-akoma-ntoso.show-structure-inline .akn-abbr:hover::before{content:\"abbr\";color:black;background-color:#afef9a;position:absolute;top:-1.4em;left:0px;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase;white-space:nowrap}la-akoma-ntoso.show-structure .akn-remark,la-akoma-ntoso.show-structure-inline .akn-remark{background-color:rgba(161, 239, 154, 0.4);position:relative}la-akoma-ntoso.show-structure .akn-remark:hover::before,la-akoma-ntoso.show-structure-inline .akn-remark:hover::before{content:\"remark\";color:black;background-color:#a1ef9a;position:absolute;top:-1.4em;left:0px;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase;white-space:nowrap}la-akoma-ntoso.show-structure .akn-abbr:hover::before,la-akoma-ntoso.show-structure-inline .akn-abbr:hover::before{content:\"ABBR - \" attr(title);text-transform:none}la-akoma-ntoso.show-structure .akn-authorialNote,la-akoma-ntoso.show-structure-subflow .akn-authorialNote{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #efbd9a}la-akoma-ntoso.show-structure .akn-authorialNote::before,la-akoma-ntoso.show-structure-subflow .akn-authorialNote::before{content:\"footnote\";position:absolute;top:0px;left:0px;color:black;background-color:#efbd9a;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-embeddedStructure,la-akoma-ntoso.show-structure-subflow .akn-embeddedStructure{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #ccef9a}la-akoma-ntoso.show-structure .akn-embeddedStructure::before,la-akoma-ntoso.show-structure-subflow .akn-embeddedStructure::before{content:\"quote\";position:absolute;top:0px;left:0px;color:black;background-color:#ccef9a;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-attachment,la-akoma-ntoso.show-structure-doc-container .akn-attachment{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #efcc9a}la-akoma-ntoso.show-structure .akn-attachment::before,la-akoma-ntoso.show-structure-doc-container .akn-attachment::before{content:\"attachment\";position:absolute;top:0px;left:0px;color:black;background-color:#efcc9a;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-component,la-akoma-ntoso.show-structure-doc-container .akn-component{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #bdef9a}la-akoma-ntoso.show-structure .akn-component::before,la-akoma-ntoso.show-structure-doc-container .akn-component::before{content:\"component\";position:absolute;top:0px;left:0px;color:black;background-color:#bdef9a;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}";

let AkomaNtoso = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** Fetch content from Laws.Africa services? Requires a Laws.Africa partnership and the frbrExpressionUri property to be set. */
    this.fetch = false;
    /** Provider URL for fetching content (advanced usage only). */
    this.provider = 'https://services.lawsafrica.com/v1';
  }
  providerChanged() {
    this.fetchContent();
  }
  fetchChanged() {
    this.fetchContent();
  }
  parseFrbrExpressionUri(newValue) {
    /*eslint-disable */
    const ex = '^(/(?<prefix>akn))/(?<country>[a-z]{2})(-(?<locality>[^/]+))?/(?<doctype>[^/]+)(/(?<subtype>[^0-9][^/]*))?(/(?<actor>[^0-9][^/]*))?/(?<date>[0-9]{4}(-[0-9]{2}(-[0-9]{2})?)?)/(?<number>[^/]+)(/(((?<language>[a-z]{3})(?<expression_date>[@:][^/]*)?(/!?(?<expression_component>[^/]+?)?(/(?<expression_subcomponent>[^.]+))?)?(\.(?<format>[a-z0-9]+))?)|!?(?<work_component>[^/]+)))?$';
    const regExp = new RegExp(ex, 'g');
    const output = regExp.exec(newValue);
    if (output === null || output === void 0 ? void 0 : output.groups) {
      Object.keys(output.groups).forEach(key => {
        var _a;
        if ((_a = output.groups) === null || _a === void 0 ? void 0 : _a[key]) {
          switch (key) {
            case 'country':
              if (!this.frbrCountry)
                this.frbrCountry = output.groups[key];
              break;
            case 'doctype':
              if (!this.frbrType)
                this.frbrType = output.groups[key];
              break;
            case 'subtype':
              if (!this.frbrSubtype)
                this.frbrSubtype = output.groups[key];
              break;
            case 'actor':
              if (!this.frbrAuthor)
                this.frbrAuthor = output.groups[key];
              break;
            case 'date':
              if (!this.frbrDate)
                this.frbrDate = output.groups[key];
              break;
            case 'number':
              if (!this.frbrNumber)
                this.frbrNumber = output.groups[key];
              break;
            case 'expression_date':
              if (!this.frbrExpressionDate) {
                this.frbrExpressionDate = output.groups[key].replace('@', '')
                  .replace(':', '');
              }
              break;
            case 'language':
              if (!this.frbrLanguage)
                this.frbrLanguage = output.groups[key];
              break;
          }
        }
      });
    }
    this.fetchContent();
  }
  async fetchContent() {
    this.ensurePartner();
    if (this.fetch && this.frbrExpressionUri && this.provider) {
      const url = this.provider + '/p/' + this.partner + '/e/portion' + this.frbrExpressionUri;
      const resp = await fetch(url);
      if (resp.ok) {
        this.el.innerHTML = await resp.text();
      }
    }
  }
  ensurePartner() {
    if (!this.partner) {
      this.partner = document.location.hostname.replace(/^www\./, '');
    }
  }
  componentWillLoad() {
    if (this.frbrExpressionUri)
      this.parseFrbrExpressionUri(this.frbrExpressionUri);
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "provider": ["providerChanged"],
    "fetch": ["fetchChanged"],
    "frbrExpressionUri": ["parseFrbrExpressionUri"]
  }; }
};
AkomaNtoso.style = akomaNtosoCss;

const decorateInternalRefsCss = "@import url(\"https://use.fontawesome.com/releases/v5.5.0/css/all.css\");.la-decorate-internal-refs__popup .tippy-box[data-animation=fade][data-state=hidden]{opacity:0}.la-decorate-internal-refs__popup [data-tippy-root]{max-width:calc(100vw - 10px)}.la-decorate-internal-refs__popup .tippy-box{position:relative;background-color:#333;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;white-space:normal;outline:0;-webkit-transition-property:visibility, opacity, -webkit-transform;transition-property:visibility, opacity, -webkit-transform;transition-property:transform, visibility, opacity;transition-property:transform, visibility, opacity, -webkit-transform}.la-decorate-internal-refs__popup .tippy-box[data-placement^=top]>.tippy-arrow{bottom:0}.la-decorate-internal-refs__popup .tippy-box[data-placement^=top]>.tippy-arrow:before{bottom:-7px;left:0;border-width:8px 8px 0;border-top-color:initial;-webkit-transform-origin:center top;transform-origin:center top}.la-decorate-internal-refs__popup .tippy-box[data-placement^=bottom]>.tippy-arrow{top:0}.la-decorate-internal-refs__popup .tippy-box[data-placement^=bottom]>.tippy-arrow:before{top:-7px;left:0;border-width:0 8px 8px;border-bottom-color:initial;-webkit-transform-origin:center bottom;transform-origin:center bottom}.la-decorate-internal-refs__popup .tippy-box[data-placement^=left]>.tippy-arrow{right:0}.la-decorate-internal-refs__popup .tippy-box[data-placement^=left]>.tippy-arrow:before{border-width:8px 0 8px 8px;border-left-color:initial;right:-7px;-webkit-transform-origin:center left;transform-origin:center left}.la-decorate-internal-refs__popup .tippy-box[data-placement^=right]>.tippy-arrow{left:0}.la-decorate-internal-refs__popup .tippy-box[data-placement^=right]>.tippy-arrow:before{left:-7px;border-width:8px 8px 8px 0;border-right-color:initial;-webkit-transform-origin:center right;transform-origin:center right}.la-decorate-internal-refs__popup .tippy-box[data-inertia][data-state=visible]{-webkit-transition-timing-function:cubic-bezier(0.54, 1.5, 0.38, 1.11);transition-timing-function:cubic-bezier(0.54, 1.5, 0.38, 1.11)}.la-decorate-internal-refs__popup .tippy-arrow{width:16px;height:16px;color:#333}.la-decorate-internal-refs__popup .tippy-arrow:before{content:\"\";position:absolute;border-color:transparent;border-style:solid}.la-decorate-internal-refs__popup .tippy-content{position:relative;padding:5px 9px;z-index:1}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border]{background-color:#fff;background-clip:padding-box;border:1px solid rgba(0, 8, 16, 0.15);color:#333;-webkit-box-shadow:0 4px 14px -2px rgba(0, 8, 16, 0.08);box-shadow:0 4px 14px -2px rgba(0, 8, 16, 0.08)}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border]>.tippy-backdrop{background-color:#fff}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border]>.tippy-arrow:after,.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border]>.tippy-svg-arrow:after{content:\"\";position:absolute;z-index:-1}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border]>.tippy-arrow:after{border-color:transparent;border-style:solid}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-arrow:before{border-top-color:#fff}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-arrow:after{border-top-color:rgba(0, 8, 16, 0.2);border-width:7px 7px 0;top:17px;left:1px}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-svg-arrow>svg{top:16px}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-svg-arrow:after{top:17px}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-arrow:before{border-bottom-color:#fff;bottom:16px}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-arrow:after{border-bottom-color:rgba(0, 8, 16, 0.2);border-width:0 7px 7px;bottom:17px;left:1px}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-svg-arrow>svg{bottom:16px}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-svg-arrow:after{bottom:17px}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-arrow:before{border-left-color:#fff}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-arrow:after{border-left-color:rgba(0, 8, 16, 0.2);border-width:7px 0 7px 7px;left:17px;top:1px}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-svg-arrow>svg{left:11px}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-svg-arrow:after{left:12px}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-arrow:before{border-right-color:#fff;right:16px}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-arrow:after{border-width:7px 7px 7px 0;right:17px;top:1px;border-right-color:rgba(0, 8, 16, 0.2)}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-svg-arrow>svg{right:11px}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-svg-arrow:after{right:12px}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border]>.tippy-svg-arrow{fill:#fff}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border]>.tippy-svg-arrow:after{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCA2czEuNzk2LS4wMTMgNC42Ny0zLjYxNUM1Ljg1MS45IDYuOTMuMDA2IDggMGMxLjA3LS4wMDYgMi4xNDguODg3IDMuMzQzIDIuMzg1QzE0LjIzMyA2LjAwNSAxNiA2IDE2IDZIMHoiIGZpbGw9InJnYmEoMCwgOCwgMTYsIDAuMikiLz48L3N2Zz4=);background-size:16px 6px;width:16px;height:6px}.la-decorate-internal-refs__popup .tippy-content{padding:0}.la-decorate-internal-refs__popup .tippy-content__title{padding:0.5rem 0.75rem;margin-bottom:0;font-size:1rem;font-weight:bold;border-bottom:1px solid #ebebeb;border-top-left-radius:calc(0.3rem - 1px);border-top-right-radius:calc(0.3rem - 1px);background-color:#f7f7f7}.la-decorate-internal-refs__popup .tippy-content__body{padding:0.5rem 0.75rem;background-color:white}.la-decorate-internal-refs__popup .tippy-content la-akoma-ntoso{max-height:40vh;overflow-y:auto}la-akoma-ntoso.flag-internal-refs .akn-ref[href^=\"#\"]::after{content:\"\\f02e\";font-family:\"Font Awesome 5 Free\";font-size:0.8em;font-style:normal;font-weight:900;color:#9c27b0;padding-left:0.1em}";

let DecorateInternalRefs = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.tippies = [];
    /**
     * If `true`, the content of internal ref targets will be shown as popups.
     */
    this.popups = false;
    /**
     * If `true`, internal refs will be flagged with in icon to be more visible.
     */
    this.flag = false;
  }
  componentWillLoad() {
    // TODO: watch for changes to the akn content?
    this.akomaNtosoElement = getAkomaNtosoElement(this.el, this.akomaNtoso);
    this.tippyContainer = document.createElement('div');
    this.tippyContainer.className = 'la-decorate-internal-refs__popup';
    document.body.appendChild(this.tippyContainer);
  }
  componentDidLoad() {
    this.changeFlag(this.flag);
    this.changePopups(this.popups);
  }
  changeFlag(flag) {
    if (this.akomaNtosoElement) {
      this.akomaNtosoElement.classList.toggle('flag-internal-refs', flag);
    }
  }
  changePopups(popups) {
    // remove existing popups
    for (const tippy of this.tippies) {
      tippy.destroy();
    }
    this.tippies = [];
    if (this.akomaNtosoElement && popups) {
      this.createPopups();
    }
  }
  createPopups() {
    // @ts-ignore
    this.tippies = tippy('a.akn-ref[href^="#"]', {
      appendTo: () => this.tippyContainer,
      allowHTML: true,
      hideOnClick: true,
      interactive: true,
      maxWidth: 450,
      onTrigger: this.onTrigger.bind(this),
      theme: 'light-border'
    });
  }
  onTrigger(tippy) {
    if (this.akomaNtosoElement) {
      const href = tippy.reference.getAttribute('href') || '';
      const provision = this.akomaNtosoElement.querySelector(href);
      if (provision) {
        tippy.setContent(`
        <div>
          <div class="tippy-content__body"><la-akoma-ntoso>${provision.outerHTML}</la-akoma-ntoso></div>
        </div>`);
      }
    }
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "flag": ["changeFlag"],
    "popups": ["changePopups"]
  }; }
};
DecorateInternalRefs.style = decorateInternalRefsCss;

/**
 * Rename element to a different HTML element, copying attributes and children.
 * @param el
 * @param name
 */
function renameElement(el, name) {
  const newEl = document.createElement(name);
  for (let i = 0; i < el.attributes.length; i++) {
    // @ts-ignore
    newEl.setAttribute(el.attributes.item(i).nodeName, el.attributes.item(i).nodeValue);
  }
  while (el.childNodes.length) {
    newEl.appendChild(el.childNodes[0]);
  }
  if (el.parentNode) {
    el.parentNode.replaceChild(newEl, el);
  }
  return newEl;
}

const decorateTermsCss = ".la-decorate-terms__popup .tippy-box[data-animation=fade][data-state=hidden]{opacity:0}.la-decorate-terms__popup [data-tippy-root]{max-width:calc(100vw - 10px)}.la-decorate-terms__popup .tippy-box{position:relative;background-color:#333;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;white-space:normal;outline:0;-webkit-transition-property:visibility, opacity, -webkit-transform;transition-property:visibility, opacity, -webkit-transform;transition-property:transform, visibility, opacity;transition-property:transform, visibility, opacity, -webkit-transform}.la-decorate-terms__popup .tippy-box[data-placement^=top]>.tippy-arrow{bottom:0}.la-decorate-terms__popup .tippy-box[data-placement^=top]>.tippy-arrow:before{bottom:-7px;left:0;border-width:8px 8px 0;border-top-color:initial;-webkit-transform-origin:center top;transform-origin:center top}.la-decorate-terms__popup .tippy-box[data-placement^=bottom]>.tippy-arrow{top:0}.la-decorate-terms__popup .tippy-box[data-placement^=bottom]>.tippy-arrow:before{top:-7px;left:0;border-width:0 8px 8px;border-bottom-color:initial;-webkit-transform-origin:center bottom;transform-origin:center bottom}.la-decorate-terms__popup .tippy-box[data-placement^=left]>.tippy-arrow{right:0}.la-decorate-terms__popup .tippy-box[data-placement^=left]>.tippy-arrow:before{border-width:8px 0 8px 8px;border-left-color:initial;right:-7px;-webkit-transform-origin:center left;transform-origin:center left}.la-decorate-terms__popup .tippy-box[data-placement^=right]>.tippy-arrow{left:0}.la-decorate-terms__popup .tippy-box[data-placement^=right]>.tippy-arrow:before{left:-7px;border-width:8px 8px 8px 0;border-right-color:initial;-webkit-transform-origin:center right;transform-origin:center right}.la-decorate-terms__popup .tippy-box[data-inertia][data-state=visible]{-webkit-transition-timing-function:cubic-bezier(0.54, 1.5, 0.38, 1.11);transition-timing-function:cubic-bezier(0.54, 1.5, 0.38, 1.11)}.la-decorate-terms__popup .tippy-arrow{width:16px;height:16px;color:#333}.la-decorate-terms__popup .tippy-arrow:before{content:\"\";position:absolute;border-color:transparent;border-style:solid}.la-decorate-terms__popup .tippy-content{position:relative;padding:5px 9px;z-index:1}.la-decorate-terms__popup .tippy-box[data-theme~=light-border]{background-color:#fff;background-clip:padding-box;border:1px solid rgba(0, 8, 16, 0.15);color:#333;-webkit-box-shadow:0 4px 14px -2px rgba(0, 8, 16, 0.08);box-shadow:0 4px 14px -2px rgba(0, 8, 16, 0.08)}.la-decorate-terms__popup .tippy-box[data-theme~=light-border]>.tippy-backdrop{background-color:#fff}.la-decorate-terms__popup .tippy-box[data-theme~=light-border]>.tippy-arrow:after,.la-decorate-terms__popup .tippy-box[data-theme~=light-border]>.tippy-svg-arrow:after{content:\"\";position:absolute;z-index:-1}.la-decorate-terms__popup .tippy-box[data-theme~=light-border]>.tippy-arrow:after{border-color:transparent;border-style:solid}.la-decorate-terms__popup .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-arrow:before{border-top-color:#fff}.la-decorate-terms__popup .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-arrow:after{border-top-color:rgba(0, 8, 16, 0.2);border-width:7px 7px 0;top:17px;left:1px}.la-decorate-terms__popup .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-svg-arrow>svg{top:16px}.la-decorate-terms__popup .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-svg-arrow:after{top:17px}.la-decorate-terms__popup .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-arrow:before{border-bottom-color:#fff;bottom:16px}.la-decorate-terms__popup .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-arrow:after{border-bottom-color:rgba(0, 8, 16, 0.2);border-width:0 7px 7px;bottom:17px;left:1px}.la-decorate-terms__popup .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-svg-arrow>svg{bottom:16px}.la-decorate-terms__popup .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-svg-arrow:after{bottom:17px}.la-decorate-terms__popup .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-arrow:before{border-left-color:#fff}.la-decorate-terms__popup .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-arrow:after{border-left-color:rgba(0, 8, 16, 0.2);border-width:7px 0 7px 7px;left:17px;top:1px}.la-decorate-terms__popup .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-svg-arrow>svg{left:11px}.la-decorate-terms__popup .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-svg-arrow:after{left:12px}.la-decorate-terms__popup .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-arrow:before{border-right-color:#fff;right:16px}.la-decorate-terms__popup .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-arrow:after{border-width:7px 7px 7px 0;right:17px;top:1px;border-right-color:rgba(0, 8, 16, 0.2)}.la-decorate-terms__popup .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-svg-arrow>svg{right:11px}.la-decorate-terms__popup .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-svg-arrow:after{right:12px}.la-decorate-terms__popup .tippy-box[data-theme~=light-border]>.tippy-svg-arrow{fill:#fff}.la-decorate-terms__popup .tippy-box[data-theme~=light-border]>.tippy-svg-arrow:after{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCA2czEuNzk2LS4wMTMgNC42Ny0zLjYxNUM1Ljg1MS45IDYuOTMuMDA2IDggMGMxLjA3LS4wMDYgMi4xNDguODg3IDMuMzQzIDIuMzg1QzE0LjIzMyA2LjAwNSAxNiA2IDE2IDZIMHoiIGZpbGw9InJnYmEoMCwgOCwgMTYsIDAuMikiLz48L3N2Zz4=);background-size:16px 6px;width:16px;height:6px}.la-decorate-terms__popup .tippy-content{padding:0}.la-decorate-terms__popup .tippy-content__title{padding:0.5rem 0.75rem;margin-bottom:0;font-size:1rem;font-weight:bold;border-bottom:1px solid #ebebeb;border-top-left-radius:calc(0.3rem - 1px);border-top-right-radius:calc(0.3rem - 1px);background-color:#f7f7f7}.la-decorate-terms__popup .tippy-content__body{padding:0.5rem 0.75rem;background-color:white}.la-decorate-terms__popup .tippy-content la-akoma-ntoso{max-height:40vh;overflow-y:auto}";

let DecorateTerms = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.defnContainers = '.akn-p, .akn-subsection, .akn-section, .akn-blockList';
    this.tippies = [];
    /**
     * If `true`, the definitions of terms will be shown as popups.
     */
    this.popupDefinitions = false;
    /**
     * If `true`, terms will be changed to `<a>` elements that jump to the term definition.
     */
    this.linkTerms = false;
  }
  componentWillLoad() {
    // TODO: watch for changes to the akn content?
    this.akomaNtosoElement = getAkomaNtosoElement(this.el, this.akomaNtoso);
    this.tippyContainer = document.createElement('div');
    this.tippyContainer.className = 'la-decorate-terms__popup';
    document.body.appendChild(this.tippyContainer);
  }
  componentDidLoad() {
    if (this.akomaNtosoElement) {
      this.setupDefinitions();
      if (this.linkTerms) {
        this.makeTermLinks();
      }
      this.changePopupDefinitions(this.popupDefinitions);
    }
  }
  changePopupDefinitions(popup) {
    // remove existing popups
    for (const tippy of this.tippies) {
      tippy.destroy();
    }
    this.tippies = [];
    if (this.akomaNtosoElement && popup) {
      this.createPopups();
    }
  }
  // tag term definition containers
  setupDefinitions() {
    var _a;
    if (this.akomaNtosoElement) {
      for (const def of this.akomaNtosoElement.querySelectorAll('.akn-def[data-refersto]')) {
        const term = (_a = def.getAttribute('data-refersto')) === null || _a === void 0 ? void 0 : _a.replace('#', '');
        const closest = def.closest(this.defnContainers);
        if (closest && term) {
          closest.dataset.defines = def.dataset.refersto;
          closest.setAttribute('id', `defn-${term}`);
        }
      }
    }
  }
  createPopups() {
    // @ts-ignore
    this.tippies = tippy('.akn-term', {
      appendTo: () => this.tippyContainer,
      allowHTML: true,
      content: '',
      hideOnClick: true,
      interactive: true,
      maxWidth: 450,
      onTrigger: this.onTrigger.bind(this),
      theme: 'light-border'
    });
  }
  onTrigger(tippy) {
    const ref = tippy.reference;
    const defn = this.getDefinition(ref);
    if (defn) {
      tippy.setContent(`
        <div>
          <div class="tippy-content__title">${ref.innerText}</div>
          <div class="tippy-content__body"><la-akoma-ntoso>${defn.outerHTML}</la-akoma-ntoso></div>
        </div>`);
    }
  }
  getDefinition(reference) {
    const term = reference.getAttribute('data-refersto');
    // find where the term is defined
    if (this.akomaNtosoElement) {
      return this.akomaNtosoElement.querySelector(`[data-defines="${term}"]`);
    }
    return null;
  }
  makeTermLinks() {
    if (this.akomaNtosoElement) {
      this.akomaNtosoElement.classList.add('link-terms');
      for (let term of this.akomaNtosoElement.querySelectorAll('.akn-term[data-refersto]')) {
        term = renameElement(term, 'a');
        const termId = (term.dataset.refersto || '').replace('#', '');
        term.setAttribute('href', `#defn-${termId}`);
      }
    }
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "popupDefinitions": ["changePopupDefinitions"]
  }; }
};
DecorateTerms.style = decorateTermsCss;

/**
 * Helper class to determine the vertical layout of a collection of gutter content elements, such that they are aligned
 * vertically with their anchor elements, but don't overlap each other.
 */
class GutterLayout {
  /**
   * @param root root element for determining heights against. This MUST have a position style attribute,
   *             such as position: relative;
   */
  constructor(root) {
    this.root = root;
    // vertical buffer between elements
    this.buffer = 10;
    this.tops = new WeakMap();
    this.anchors = new WeakMap();
  }
  layout(items) {
    this.updateAnchorsAndItems(items);
    // pre-calculate tops
    this.updateTops(items);
    // sort items by ascending anchorElement top
    items = this.sortItems(items);
    // find the first item that is active
    const activeItem = items.find(x => x.active);
    if (activeItem) {
      const ix = items.indexOf(activeItem);
      if (ix > -1) {
        // layout the primary item first
        const anchor = this.anchors.get(activeItem);
        if (anchor) {
          const top = this.tops.get(anchor);
          if (top) {
            activeItem.style.top = `${top}px`;
            // layout the ones going upwards from here
            this.layoutUpwards(items, ix - 1, top - this.buffer);
            // layout the ones going downwards from here
            this.layoutDownwards(items, ix + 1, top + activeItem.clientHeight + this.buffer);
            return;
          }
        }
      }
    }
    // nothing is primary, go top downwards
    this.layoutDownwards(items, 0, 0);
  }
  sortItems(items) {
    return [...items].sort(this.compareItems.bind(this));
  }
  /**
   * Comparator that sorts items be ascending top value.
   */
  compareItems(a, b) {
    const anchorA = this.anchors.get(a);
    const anchorB = this.anchors.get(b);
    if (anchorA) {
      if (anchorB) {
        const topA = this.tops.get(anchorA);
        const topB = this.tops.get(anchorB);
        if (topA) {
          if (topB) {
            return topA - topB;
          }
          else {
            // a has an top, b doesn't, so a comes after b
            return 1;
          }
        }
        else {
          // a has no top, best if b comes after a
          return -1;
        }
      }
      else {
        // a has an anchor, b doesn't, so a comes after b
        return 1;
      }
    }
    else {
      // a has no anchor, best if b comes after a
      return -1;
    }
  }
  layoutUpwards(items, start, watermark) {
    // layout the items from index start, going bottom to top
    for (let i = start; i >= 0; i--) {
      const item = items[i];
      const anchor = this.anchors.get(item);
      if (anchor) {
        let top = this.tops.get(anchor);
        if (top) {
          if (top + item.clientHeight >= watermark) {
            top = watermark - item.clientHeight;
          }
          item.style.top = `${top}px`;
          watermark = top - this.buffer;
        }
      }
    }
  }
  layoutDownwards(items, start, watermark) {
    // layout the items from index start, going top to bottom
    for (let i = start; i < items.length; i++) {
      const item = items[i];
      const anchor = this.anchors.get(item);
      if (anchor) {
        let top = this.tops.get(anchor);
        if (top) {
          top = Math.max(watermark, top);
          item.style.top = `${top}px`;
          watermark = top + item.clientHeight + this.buffer;
        }
      }
    }
  }
  updateAnchorsAndItems(items) {
    this.anchors = new WeakMap();
    for (const item of items) {
      const anchor = this.getItemAnchor(item);
      if (anchor) {
        this.anchors.set(item, anchor);
      }
      item.style.display = anchor ? '' : 'none';
    }
  }
  getItemAnchor(item) {
    if (item.anchor) {
      if (item.anchor instanceof HTMLElement) {
        return this.root.contains(item.anchor) ? item.anchor : null;
      }
      else {
        return this.root.querySelector(item.anchor);
      }
    }
    return null;
  }
  updateTops(items) {
    this.tops = new WeakMap();
    for (const item of items) {
      const anchor = this.anchors.get(item);
      if (anchor && !this.tops.has(anchor)) {
        this.tops.set(anchor, this.calculateTop(anchor));
      }
    }
  }
  /**
   * Find the top of an element, relative to this.root.
   * @param element
   * @returns {number}
   */
  calculateTop(element) {
    let top = 0;
    let el = element;
    while (el && el !== this.root) {
      top += el.offsetTop;
      el = el.offsetParent;
    }
    return top;
  }
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return _root.Date.now();
};

var now_1 = now;

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

var _trimmedEndIndex = trimmedEndIndex;

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, _trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

var _baseTrim = baseTrim;

/** Built-in value references. */
var Symbol = _root.Symbol;

var _Symbol = Symbol;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto$1.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
}

var isSymbol_1 = isSymbol;

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol_1(value)) {
    return NAN;
  }
  if (isObject_1(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject_1(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = _baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

var toNumber_1 = toNumber;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber_1(wait) || 0;
  if (isObject_1(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber_1(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now_1();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now_1());
  }

  function debounced() {
    var time = now_1(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

var debounce_1 = debounce;

const gutterCss = ".la-akoma-ntoso-with-gutter{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.la-akoma-ntoso-with-gutter la-akoma-ntoso{-ms-flex:80%;flex:80%;max-width:80%;position:relative;padding-right:0.5rem}.la-akoma-ntoso-with-gutter la-gutter{-ms-flex:20%;flex:20%;max-width:20%;position:relative;overflow-y:hidden;background-color:rgba(0, 0, 0, 0.05);padding-left:0.5rem;padding-right:0.5rem}la-gutter>la-gutter-item{position:absolute;left:1rem;width:calc(100% - 1.5rem);-webkit-transition:top ease-out 100ms, left ease-out 100ms;transition:top ease-out 100ms, left ease-out 100ms;z-index:2}la-gutter>la-gutter-item[active]{left:0.5rem}";

let Gutter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.layoutComplete = createEvent(this, "layoutComplete", 7);
    // Delay in msecs to debounce updates
    this.debounceDelay = 100;
  }
  componentWillLoad() {
    // TODO: watch for changes to the akn content?
    this.akomaNtosoElement = getAkomaNtosoElement(this.el, this.akomaNtoso);
    // setup a debounced function to trigger a layout run.
    this.queueLayout = debounce_1(this.layoutItems.bind(this), this.debounceDelay);
    // re-run layout when child elements change
    this.mutationObserver = new MutationObserver(this.queueLayout);
    this.mutationObserver.observe(this.el, { childList: true });
  }
  componentDidLoad() {
    this.setupLayout();
    this.layoutItems();
  }
  disconnectedCallback() {
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
    }
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }
  itemChanged(event) {
    const target = event.target;
    if (target && target.active) {
      // set all other items inactive. if there was a previously active item, this change will
      // trigger a new event, but the debounce will prevent an unnecessary layout.
      this.setOtherItemsInactive(target);
    }
    this.queueLayout();
  }
  clicked(event) {
    // a click in the gutter, outside of an item, deactivates all items
    const target = event.target;
    if (target && !target.closest('la-gutter-item')) {
      for (const item of this.items()) {
        item.active = false;
      }
    }
  }
  /**
   * Ensure all items except this one are set as inactive.
   */
  setOtherItemsInactive(activeItem) {
    for (const item of this.items()) {
      if (item != activeItem) {
        item.active = false;
      }
    }
  }
  setupLayout() {
    if (this.akomaNtosoElement) {
      this.layout = new GutterLayout(this.akomaNtosoElement);
      if (window.ResizeObserver) {
        if (this.resizeObserver)
          this.resizeObserver.disconnect();
        // add observer to re-layout when the containing document changes size, which implies marker positions will change
        this.resizeObserver = new ResizeObserver(this.queueLayout);
        this.resizeObserver.observe(this.akomaNtosoElement);
      }
    }
  }
  /**
   * Layout the gutter items.
   */
  async layoutItems() {
    if (this.layout) {
      this.layout.layout([...this.items()]);
      this.layoutComplete.emit();
    }
  }
  /**
   * Activates the item logically after the currently active item. The activated item's `active` property will be set to
   * true. Returns the activated item. Or returns null if there are no items. If there is no item currently
   * active, the top-most item is activated. If the currently active item is the bottom-most item in the gutter,
   * then the top-most item will be activated. If there is one item in the gutter that is not active, then that item will be activated.
   */
  async activateNextItem() {
    const items = this.layout ? this.layout.sortItems(this.getVisibleItems()) : [];
    if (items.length === 1) {
      items[0].active = true;
      return items[0];
    }
    else if (items.length > 1) {
      const activeItemIndex = items.findIndex(item => item.active);
      const nextActiveItem = activeItemIndex === -1 || activeItemIndex === items.length - 1
        ? items[0]
        : items[activeItemIndex + 1];
      nextActiveItem.active = true;
      return nextActiveItem;
    }
    else {
      return null;
    }
  }
  /**
   * Activates the item logically before the currently active item. The activated item's `active` property will be set to
   * true. Returns the activated item. Or returns null if there are no items. If there is no item currently
   * active, the bottom-most item is activated. If the currently active item is the top-most item in the gutter,
   * then the bottom-most item will be activated. If there is one item in the gutter that is not active, then that item will be activated.
   */
  async activatePrevItem() {
    const items = this.layout ? this.layout.sortItems(this.getVisibleItems()) : [];
    if (items.length === 1) {
      items[0].active = true;
      return items[0];
    }
    else if (items.length > 1) {
      const activeItemIndex = items.findIndex(item => item.active);
      const nextActiveItem = activeItemIndex === -1 || activeItemIndex === 0
        ? items[items.length - 1]
        : items[activeItemIndex - 1];
      nextActiveItem.active = true;
      return nextActiveItem;
    }
    else {
      return null;
    }
  }
  items() {
    return this.el.querySelectorAll('la-gutter-item');
  }
  getVisibleItems() {
    return [...this.items()].filter(i => i.style.display !== 'none');
  }
  get el() { return getElement(this); }
};
Gutter.style = gutterCss;

const gutterItemCss = "la-gutter-item{display:block}";

let GutterItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.laItemChanged = createEvent(this, "laItemChanged", 7);
    /**
     * Indicates that this is the active item in the gutter. Only one item can be active at a time.
     */
    this.active = false;
  }
  activeChanged() {
    this.laItemChanged.emit();
  }
  anchorChanged() {
    this.laItemChanged.emit();
  }
  onClick() {
    this.active = true;
  }
  static get watchers() { return {
    "active": ["activeChanged"],
    "anchor": ["anchorChanged"]
  }; }
};
GutterItem.style = gutterItemCss;

let TableOfContents = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * JSON value or string value parsed to array of items used to build the table of contents. Each item must have
     * a `title` attribute (which may be `null`), and a `children` attribute (which may be `null`).
     * */
    this.items = [];
    /**
     * value to filter items by item title
     * */
    this.titleFilter = '';
    this.filteredItems = null;
    this.innerItems = [];
  }
  parseItemsProp(newValue) {
    if (typeof newValue === 'string') {
      this.innerItems = JSON.parse(newValue);
    }
    else if (Array.isArray(newValue)) {
      this.innerItems = [...newValue];
    }
  }
  componentWillLoad() {
    this.parseItemsProp(this.items);
    this.titleFilterChanged(this.titleFilter);
  }
  /**
   * Expands all items
   */
  async expandAll() {
    for (const item of this.el.querySelectorAll('la-toc-item')) {
      item.expanded = true;
    }
  }
  /**
   * Collapses all items
   */
  async collapseAll() {
    for (const item of this.el.querySelectorAll('la-toc-item')) {
      item.expanded = false;
    }
  }
  titleFilterChanged(filter) {
    if (filter) {
      const needle = filter.toLocaleLowerCase().trim();
      const filteredItems = new Set();
      // recursively include all children
      function includeKids(item) {
        for (const child of item.children || []) {
          filteredItems.add(child);
          includeKids(child);
        }
      }
      // Recursive function that determines whether or not an item should be rendered.
      // An item is rendered if its title matches the filter, or any of its children should be rendered.
      function shouldInclude(item) {
        var _a;
        // this will be true if this item matches the search, or any child does
        let include = (((_a = item.title) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase()) || '').includes(needle);
        if (include) {
          // this item matches, show include all children automatically, no need to go any deeper
          includeKids(item);
        }
        else {
          // if any children match, then this node must be included
          if (item.children) {
            for (const child of item.children) {
              include = shouldInclude(child) || include;
            }
          }
        }
        if (include) {
          filteredItems.add(item);
        }
        return include;
      }
      for (const item of this.innerItems) {
        shouldInclude(item);
      }
      this.filteredItems = filteredItems;
    }
    else {
      this.filteredItems = null;
    }
    this.expandAll();
  }
  render() {
    const renderTOCItem = (item) => {
      const getSlotHTML = (selector) => {
        var _a;
        const element = this.el.querySelector(selector);
        /**
         * If slots originate from `la-table-of-contents`, query for slot html is
         * `this.el.querySelector("[slot]").innerHTML`
         * If slot originate from `la-table-of-contents-controller` query for slot html is
         * `this.el.querySelector("[slot] [slot]").innerHTML`
         * */
        if (element === null || element === void 0 ? void 0 : element.querySelector(selector)) {
          return ((_a = element.querySelector(selector)) === null || _a === void 0 ? void 0 : _a.innerHTML) || '';
        }
        return (element === null || element === void 0 ? void 0 : element.innerHTML) || '';
      };
      const prepend = getSlotHTML("[slot='prepend']");
      const append = getSlotHTML("[slot='append']");
      const expandIcon = getSlotHTML("[slot='expand-icon']");
      const collapseIcon = getSlotHTML("[slot='collapse-icon']");
      return (h("la-toc-item", { item: item, filteredItems: this.filteredItems, prependHtml: prepend, appendHtml: append, expandIconHtml: expandIcon, collapseIconHtml: collapseIcon }));
    };
    return (h(Host, null, h("div", { style: { display: 'none' } }, h("slot", { name: "append" }), h("slot", { name: "prepend" }), h("slot", { name: "expand-icon" }), h("slot", { name: "collapse-icon" })), h("div", { class: "toc-items" }, this.innerItems.map(item => renderTOCItem(item)))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "items": ["parseItemsProp"],
    "titleFilter": ["titleFilterChanged"]
  }; }
};

const tableOfContentsControllerCss = "la-table-of-contents-controller *{-webkit-box-sizing:border-box;box-sizing:border-box}la-table-of-contents-controller .search{width:100%;margin-bottom:5px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:relative}la-table-of-contents-controller .search__input{-ms-flex:1;flex:1}la-table-of-contents-controller .search__clear-btn{position:absolute;top:0;right:0;height:100%}la-table-of-contents-controller .toggle{margin-bottom:5px}la-table-of-contents-controller .toggle__expand-all-btn{margin-right:5px}";

let TableOfContentsController = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * JSON value of array of items or string value parsed to array of items used to build the table of contents. Each
     * item must have a `title` attribute (which may be `null`), and a `children` attribute (which may be `null`).
     * */
    this.items = [];
    /**
     * Placeholder for search title filter
     * */
    this.titleFilterPlaceholder = 'Search the table of contents';
    /**
     * If true, hides clear title filter button
     */
    this.hideClearTitleFilterButton = false;
    /**
     * Additional classes added to title filter button
     */
    this.titleFilterClearBtnClasses = '';
    /**
     * Additional classes added to Expand all button
     * */
    this.expandAllBtnClasses = '';
    /**
     * Additional classes added to Collapse all button
     * */
    this.collapseAllBtnClasses = '';
    /**
     * Additional CSS classes added to the search filter input
     * */
    this.titleFilterInputClasses = '';
    this.titleFilter = '';
    this.handleTitleChange = debounce_1((e) => {
      this.titleFilter = e.target.value;
    }, 300);
  }
  clearTitleFilter() {
    this.titleFilter = '';
  }
  async expandAll() {
    const tocElement = this.el.querySelector('la-table-of-contents');
    tocElement === null || tocElement === void 0 ? void 0 : tocElement.expandAll();
  }
  async collapseAll() {
    const tocElement = this.el.querySelector('la-table-of-contents');
    tocElement === null || tocElement === void 0 ? void 0 : tocElement.collapseAll();
  }
  render() {
    const renderHideClearFilterButton = () => {
      if (this.hideClearTitleFilterButton) {
        return null;
      }
      return (h("button", { class: `search__clear-btn ${this.titleFilterClearBtnClasses}`, type: "button", onClick: () => this.clearTitleFilter(), disabled: !this.titleFilter }, h("slot", { name: "clear-title-filter-icon" }, "\u2715")));
    };
    return (h(Host, null, h("div", { class: "search" }, h("input", { class: `search__input ${this.titleFilterInputClasses}`, value: this.titleFilter, placeholder: this.titleFilterPlaceholder, onInput: e => this.handleTitleChange(e) }), renderHideClearFilterButton()), h("div", { class: "toggle" }, h("button", { type: "button", class: `toggle__expand-all-btn ${this.expandAllBtnClasses}`, onClick: () => this.expandAll() }, "Expand All"), h("button", { type: "button", class: `toggle__collapse-all-btn ${this.collapseAllBtnClasses}`, onClick: () => this.collapseAll() }, "Collapse All")), h("la-table-of-contents", { items: this.items, titleFilter: this.titleFilter }, h("span", { slot: "append" }, h("slot", { name: "append" })), h("span", { slot: "prepend" }, h("slot", { name: "prepend" })), h("span", { slot: "expand-icon" }, h("slot", { name: "expand-icon" })), h("span", { slot: "collapse-icon" }, h("slot", { name: "collapse-icon" })))));
  }
  get el() { return getElement(this); }
};
TableOfContentsController.style = tableOfContentsControllerCss;

const tocItemCss = "la-toc-item{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;width:100%}la-toc-item *{-webkit-box-sizing:border-box;box-sizing:border-box}la-toc-item .indented{width:1.4em;height:1.4em}la-toc-item .content{-ms-flex:1;flex:1}la-toc-item .content__action{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center}la-toc-item .content__action__title{-ms-flex-positive:1;flex-grow:1}la-toc-item .content__children{display:none}la-toc-item[expanded]>.content>.content__children{display:inherit}la-toc-item.excluded{display:none}la-toc-item .indented__toggle-btn{cursor:pointer;display:inline-block;font-size:smaller;text-align:center;padding:1px 6px}";

let TocItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.itemRendered = createEvent(this, "itemRendered", 7);
    this.itemTitleClicked = createEvent(this, "itemTitleClicked", 7);
    /**
     * Item used to build the table of contents
     * */
    this.item = {};
    /**
     * Array of items filtered by titleQuery used in la-toc-item to determine with item is shown or not
     * */
    this.filteredItems = null;
    /**
     * HTML displayed before item title
     * */
    this.prependHtml = '';
    /**
     * HTML displayed after item title
     * */
    this.appendHtml = '';
    /**
     * HTML displayed in toggle button when item is expanded
     * */
    this.expandIconHtml = '';
    /**
     * HTML displayed in toggle button when item is not expanded
     * */
    this.collapseIconHtml = '';
    /**
     * If true, `item` `children`, and the collapsed icon are shown but expanded icon is hidden. If false, the `item`
     * `children` and collapsed icon are hidden but the expanded icon is show
     * */
    this.expanded = true;
    this.onItemTitleClick = (e) => {
      this.itemTitleClicked.emit(e);
    };
  }
  toggle() {
    this.expanded = !this.expanded;
  }
  componentDidRender() {
    this.itemRendered.emit();
  }
  render() {
    const isParent = !!(this.item.children && this.item.children.length);
    const showItem = !this.filteredItems || this.filteredItems.has(this.item);
    const renderToggleBtnInner = () => {
      if (this.expanded) {
        return this.collapseIconHtml ? h("span", { innerHTML: this.collapseIconHtml }) : h("span", null, "\u25BC");
      }
      return this.expandIconHtml ? h("span", { innerHTML: this.expandIconHtml }) : h("span", null, "\u25B6");
    };
    return (h(Host, Object.assign({}, (isParent ? { parent: isParent } : {}), { class: `${!showItem ? 'excluded' : ''}` }), h("div", { class: "indented" }, isParent
      ? (h("div", { class: "indented__toggle-btn", role: "button", onClick: () => this.toggle() }, renderToggleBtnInner()))
      : null), h("div", { class: "content" }, h("div", { class: "content__action" }, this.prependHtml ? h("div", { class: "content__action__prepend", innerHTML: this.prependHtml }) : null, h("a", { href: `#${this.item.id || ''}`, class: "content__action__title", onClick: this.onItemTitleClick }, this.item.title), this.appendHtml ? h("div", { class: "content__action__append", innerHTML: this.appendHtml }) : null), h("div", { class: "content__children" }, this.item.children && this.item.children.length
      ? this.item.children.map((item) => (h("la-toc-item", { item: item, filteredItems: this.filteredItems, prependHtml: this.prependHtml, appendHtml: this.appendHtml, expandIconHtml: this.expandIconHtml, collapseIconHtml: this.collapseIconHtml })))
      : null))));
  }
};
TocItem.style = tocItemCss;

export { AkomaNtoso as la_akoma_ntoso, DecorateInternalRefs as la_decorate_internal_refs, DecorateTerms as la_decorate_terms, Gutter as la_gutter, GutterItem as la_gutter_item, TableOfContents as la_table_of_contents, TableOfContentsController as la_table_of_contents_controller, TocItem as la_toc_item };
