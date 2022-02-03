import { createEvent, h, Host, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath, setPlatformOptions } from '@stencil/core/internal/client';

const akomaNtosoCss = "@import url(\"https://fonts.googleapis.com/css?family=PT+Serif:400,400i,700,700i\");@import url(\"https://fonts.googleapis.com/css?family=PT+Serif:400,400i,700,700i\");la-akoma-ntoso{display:block;font-family:Palatino, \"Book Antiqua\", \"PT Serif\", Georgia, serif;font-size:15px;line-height:1.35;}@-webkit-keyframes fadeout{from{background-color:yellow}to{background-color:unset}}@keyframes fadeout{from{background-color:yellow}to{background-color:unset}}la-akoma-ntoso.flash-target :target{-webkit-animation:fadeout 2s;animation:fadeout 2s}la-akoma-ntoso .akn-blockContainer{display:block}la-akoma-ntoso .akn-block{display:block}la-akoma-ntoso .akn-blockList{display:block}la-akoma-ntoso .akn-conclusions{display:block}la-akoma-ntoso .akn-coverPage{display:block}la-akoma-ntoso .akn-foreign{display:block}la-akoma-ntoso .akn-item{display:block}la-akoma-ntoso .akn-ol{display:block}la-akoma-ntoso .akn-p{display:block}la-akoma-ntoso .akn-preamble{display:block}la-akoma-ntoso .akn-preface{display:block}la-akoma-ntoso .akn-tblock{display:block}la-akoma-ntoso .akn-toc{display:block}la-akoma-ntoso .akn-ul{display:block}la-akoma-ntoso .akn-preface,la-akoma-ntoso .akn-preamble{margin-bottom:1.6em}la-akoma-ntoso .akn-preface>.akn-p,la-akoma-ntoso .akn-preamble>.akn-p{margin-bottom:0.8em}la-akoma-ntoso .akn-listIntroduction,la-akoma-ntoso .akn-p{display:block;margin-bottom:0.8em}la-akoma-ntoso .akn-blockList>.akn-item{padding-left:3em;margin-bottom:0.8em}la-akoma-ntoso .akn-blockList>.akn-item>.akn-num{display:block;float:left;margin-left:-3em;margin-right:0.25em}la-akoma-ntoso .akn-ul,la-akoma-ntoso .akn-ol{list-style-position:outside;padding-left:3em;margin-bottom:0.8em}la-akoma-ntoso .akn-ul{list-style-type:disc}la-akoma-ntoso .akn-ol{list-style-type:arabic}la-akoma-ntoso .akn-li{display:list-item;margin-bottom:0.8em}la-akoma-ntoso .akn-akomaNtoso{display:block}la-akoma-ntoso .akn-act{display:block}la-akoma-ntoso .akn-amendment{display:block}la-akoma-ntoso .akn-amendmentList{display:block}la-akoma-ntoso .akn-bill{display:block}la-akoma-ntoso .akn-components{display:block}la-akoma-ntoso .akn-debate{display:block}la-akoma-ntoso .akn-debateReport{display:block}la-akoma-ntoso .akn-doc{display:block}la-akoma-ntoso .akn-documentCollection{display:block}la-akoma-ntoso .akn-judgment{display:block}la-akoma-ntoso .akn-officialGazette{display:block}la-akoma-ntoso .akn-portion{display:block}la-akoma-ntoso .akn-statement{display:block}la-akoma-ntoso .coverpage{text-align:center;margin-bottom:1.6em}la-akoma-ntoso .coverpage .notice-list{margin:0px;padding:0px}la-akoma-ntoso .coverpage .notice-list li{list-style:none}la-akoma-ntoso .coverpage .place-name,la-akoma-ntoso .coverpage .parent-work{font-size:19px;line-height:1.2;margin-bottom:0.8em;font-weight:bold}la-akoma-ntoso .coverpage .assent-date,la-akoma-ntoso .coverpage .commencement-date{margin-bottom:0.8em;font-weight:bold}la-akoma-ntoso .coverpage .commencement-date-list{margin-bottom:0.8em}la-akoma-ntoso .coverpage .commencement-date-uncommenced{margin-bottom:0.8em;font-weight:bold}la-akoma-ntoso .coverpage .commencements-table{margin:auto;max-width:80%}la-akoma-ntoso .coverpage .amendment-list{margin-top:1.6em;padding:0px}la-akoma-ntoso .coverpage .amendment{list-style:none;margin-bottom:0.8em;font-style:italic}la-akoma-ntoso .coverpage .commencement-note,la-akoma-ntoso .coverpage .verification-notice,la-akoma-ntoso .coverpage .as-at-date-notice{margin-top:0.8em;font-style:italic}la-akoma-ntoso h1,la-akoma-ntoso h2,la-akoma-ntoso h3,la-akoma-ntoso h4,la-akoma-ntoso h5,la-akoma-ntoso .akn-heading{margin-top:0px;margin-bottom:0.8em;font-family:Palatino, \"Book Antiqua\", \"PT Serif\", Georgia, serif;font-weight:bold}la-akoma-ntoso h1{font-size:26px;line-height:1.2}la-akoma-ntoso h2,la-akoma-ntoso .akn-heading{text-align:center;font-size:19px;line-height:1.2}la-akoma-ntoso h3{font-size:18px;line-height:1.35}la-akoma-ntoso h4{font-size:15px;line-height:1.35}la-akoma-ntoso .akn-subheading,la-akoma-ntoso .akn-crossHeading{text-align:center;font-style:italic}la-akoma-ntoso .akn-attachment>.akn-subheading{font-style:normal}la-akoma-ntoso .akn-alinea{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-article{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-book{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-chapter{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-clause{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-division{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-hcontainer{display:block;margin-bottom:0.8em}la-akoma-ntoso .akn-indent{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-level{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-list{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-paragraph{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-part{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-point{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-proviso{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-rule{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-section{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-subchapter{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-subclause{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-subdivision{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-sublist{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-subparagraph{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-subpart{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-subrule{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-subsection{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-subtitle{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-title{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-tome{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-transitional{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-crossHeading{display:block;margin-bottom:1.6em}la-akoma-ntoso .akn-subsection,la-akoma-ntoso .akn-paragraph,la-akoma-ntoso .akn-subparagraph{padding-left:3em;margin-bottom:0.8em}la-akoma-ntoso .akn-subsection.akn--no-indent,la-akoma-ntoso .akn-paragraph.akn--no-indent,la-akoma-ntoso .akn-subparagraph.akn--no-indent{padding-left:0px}la-akoma-ntoso .akn-subsection>.akn-num,la-akoma-ntoso .akn-paragraph>.akn-num,la-akoma-ntoso .akn-subparagraph>.akn-num{display:block;float:left;margin-left:-3em;margin-right:0.25em}la-akoma-ntoso .akn-subsection>.akn-heading,la-akoma-ntoso .akn-paragraph>.akn-heading,la-akoma-ntoso .akn-subparagraph>.akn-heading{font-size:inherit;text-align:inherit;line-height:inherit}la-akoma-ntoso .akn-list>.akn-intro{display:block;margin-bottom:0.8em}la-akoma-ntoso .akn-list>.akn-point{display:block;margin-left:3em;margin-bottom:0.8em}la-akoma-ntoso .akn-list>.akn-point>.akn-num{display:block;float:left;margin-left:-3em;margin-right:0.25em}la-akoma-ntoso .akn-br{display:block}la-akoma-ntoso .akn-def{font-weight:bold}la-akoma-ntoso .akn-longTitle{display:block;font-weight:bold;margin-bottom:0.8em}la-akoma-ntoso .akn-remark{font-style:italic}la-akoma-ntoso img{max-width:100%}la-akoma-ntoso .akn-ins{text-decoration:underline}la-akoma-ntoso .akn-del{text-decoration:line-through}la-akoma-ntoso .akn-authorialNote{display:-ms-flexbox;display:flex;font-size:small;margin-top:0.4em;padding:0.25em 0.25em 0 0.25em;position:relative;background-color:rgba(0, 0, 0, 0.07)}la-akoma-ntoso .akn-authorialNote::before{content:\" \";position:absolute;top:0;left:0;border-top:1px solid black;width:15%}la-akoma-ntoso .akn-authorialNote+.akn-authorialNote{margin-top:0px}la-akoma-ntoso .akn-authorialNote+.akn-authorialNote::before{border-top:0px}la-akoma-ntoso .akn-authorialNote>.akn-authorialNote--marker{margin-right:0.5em}la-akoma-ntoso .akn-embeddedStructure{display:block;margin-left:2em}la-akoma-ntoso .akn-embeddedStructure .akn-embeddedStructure--startQuote{margin-left:-0.5em;float:left}la-akoma-ntoso .akn--table-container{max-width:100%;overflow-y:auto}la-akoma-ntoso table{width:100%;margin-bottom:1.6em;border:1px solid #ddd;border-collapse:collapse}la-akoma-ntoso table th,la-akoma-ntoso table td{border-top:1px solid #ddd;border-left:1px solid #ddd;padding:5px;text-align:left;vertical-align:top}la-akoma-ntoso table th{font-weight:bold}la-akoma-ntoso table th>:last-child,la-akoma-ntoso table td>:last-child{margin-bottom:0px}la-akoma-ntoso table thead th{vertical-align:bottom}la-akoma-ntoso table caption+thead tr:first-child th,la-akoma-ntoso table caption+thead tr:first-child td,la-akoma-ntoso table colgroup+thead tr:first-child th,la-akoma-ntoso table colgroup+thead tr:first-child td,la-akoma-ntoso table thead:first-child tr:first-child th,la-akoma-ntoso table thead:first-child tr:first-child td{border-top:0}la-akoma-ntoso table tbody+tbody{border-top:2px solid #ddd}la-akoma-ntoso .akn--text-left{text-align:left}la-akoma-ntoso .akn--text-center{text-align:center}la-akoma-ntoso .akn--text-right{text-align:right}la-akoma-ntoso[frbr-country^=ke]{}la-akoma-ntoso[frbr-country^=ke] .akn-remark,la-akoma-ntoso[frbr-country^=ke] .akn-crossHeading{font-style:normal}la-akoma-ntoso[frbr-country^=ke] .coverpage .amendment,la-akoma-ntoso[frbr-country^=ke] .coverpage .verification-notice,la-akoma-ntoso[frbr-country^=ke] .coverpage .as-at-date-notice{font-style:normal}la-akoma-ntoso[frbr-country^=ke] .akn-listIntroduction>.akn-remark:only-child,la-akoma-ntoso[frbr-country^=ke] .akn-p>.akn-remark:only-child{display:block;margin-top:0.8em;text-align:center}la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .akn-division .akn-heading,la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .akn-paragraph .akn-heading{text-align:start;font-size:15px;line-height:1.35}la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .akn-heading,la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .akn-subheading{margin-bottom:0.8em}la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .akn-judgmentBody .akn-p,la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .akn-attachments .akn-p{text-align:justify}la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .akn-remark,la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .akn-ref,la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .akn-term{font-style:italic}la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] em{font-style:normal;text-decoration:underline}la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] table{border-width:0px}la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] table th,la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] table td{border-left-width:0px;border-top-width:0px}la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] table tbody+tbody{border-top-width:0px}la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .akn-header{padding-top:1.6em;padding-bottom:3.2em}la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .tausi-header{width:80%;margin-left:auto;margin-right:auto;margin-bottom:1.6em;font-weight:bold;text-align:center}la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .tausi-header .doc-title,la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .tausi-header .neutral-citation{margin-bottom:0.8em}la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .tausi-header .doc-date,la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .tausi-header .judges,la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .tausi-header .docket-number,la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .tausi-header .extra-text,la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .tausi-header .doc-authority{margin-bottom:0.8em;text-transform:uppercase}la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .tausi-header .legacy-citation{margin-bottom:0.8em;font-weight:normal;font-style:italic}la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .tausi-header .republic-head,la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .tausi-header .parties-separator{margin-top:1.6em;margin-bottom:0.8em;text-transform:uppercase}la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .tausi-header .party-listing{margin-bottom:0.8em;text-transform:uppercase;display:-ms-flexbox;display:flex;-ms-flex-line-pack:end;align-content:flex-end}la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .tausi-header .party-listing .party-name{text-align:left;max-width:60%}la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .tausi-header .party-listing .dotted{-ms-flex-positive:1;flex-grow:1;border-bottom:dotted 1px;margin:6px}la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .tausi-header .header-note{margin-top:1.6em;margin-bottom:0.8em;font-style:italic}la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .summary{text-align:justify}la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .summary .summary-title,la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .summary .author{margin-bottom:0.8em}la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .summary .catchwords,la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .summary .outcome{font-style:italic}la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .summary .akn-h4{font-weight:bold;font-style:normal}la-akoma-ntoso[frbr-country^=ke][frbr-type=judgment] .introduction .decision-action{text-align:center;margin-top:2.4em;text-transform:uppercase;font-weight:bold}la-akoma-ntoso[frbr-country^=na] .coverpage .amendment-list,la-akoma-ntoso[frbr-country^=na] .coverpage .commencement-date,la-akoma-ntoso[frbr-country^=na] .coverpage .verification-notice,la-akoma-ntoso[frbr-country^=na] .coverpage .as-at-date-notice,la-akoma-ntoso[frbr-country^=na] .coverpage .assent-date{font-style:normal;font-weight:bold;color:#00b156}la-akoma-ntoso[frbr-country^=na] .coverpage .as-at-date-notice,la-akoma-ntoso[frbr-country^=na] .coverpage .amendment,la-akoma-ntoso[frbr-country^=na] .coverpage .commencement-note,la-akoma-ntoso[frbr-country^=na] .coverpage .verification-notice{font-style:normal}la-akoma-ntoso[frbr-country^=na] .akn-remark{font-style:normal;font-weight:bold;color:#00b156}la-akoma-ntoso[frbr-country^=na] .akn-p>.akn-remark:only-child,la-akoma-ntoso[frbr-country^=na] .akn-listIntroduction>.akn-remark:only-child{display:block;margin-top:0.8em;text-align:center}la-akoma-ntoso[frbr-country^=pl]{}la-akoma-ntoso[frbr-country^=pl] .coverpage .doctype{text-transform:uppercase}la-akoma-ntoso[frbr-country^=pl] .akn-intro,la-akoma-ntoso[frbr-country^=pl] .akn-list,la-akoma-ntoso[frbr-country^=pl] .akn-paragraph,la-akoma-ntoso[frbr-country^=pl] .akn-point{margin-bottom:0.8em}la-akoma-ntoso[frbr-country^=pl] .akn-alinea,la-akoma-ntoso[frbr-country^=pl] .akn-indent,la-akoma-ntoso[frbr-country^=pl] .akn-paragraph,la-akoma-ntoso[frbr-country^=pl] .akn-point{margin-left:3em}la-akoma-ntoso[frbr-country^=pl] .akn-alinea>.akn-num,la-akoma-ntoso[frbr-country^=pl] .akn-alinea>.akn-indent-num,la-akoma-ntoso[frbr-country^=pl] .akn-indent>.akn-num,la-akoma-ntoso[frbr-country^=pl] .akn-indent>.akn-indent-num,la-akoma-ntoso[frbr-country^=pl] .akn-paragraph>.akn-num,la-akoma-ntoso[frbr-country^=pl] .akn-paragraph>.akn-indent-num,la-akoma-ntoso[frbr-country^=pl] .akn-point>.akn-num,la-akoma-ntoso[frbr-country^=pl] .akn-point>.akn-indent-num{display:block;float:left;margin-left:-3em}la-akoma-ntoso.show-structure .akn-alinea,la-akoma-ntoso.show-structure-hier .akn-alinea{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #ef9a9a}la-akoma-ntoso.show-structure .akn-alinea::before,la-akoma-ntoso.show-structure-hier .akn-alinea::before{content:\"alinea\";position:absolute;top:0px;left:0px;color:white;background-color:#ef9a9a;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-article,la-akoma-ntoso.show-structure-hier .akn-article{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #efa89a}la-akoma-ntoso.show-structure .akn-article::before,la-akoma-ntoso.show-structure-hier .akn-article::before{content:\"article\";position:absolute;top:0px;left:0px;color:white;background-color:#efa89a;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-book,la-akoma-ntoso.show-structure-hier .akn-book{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #efb69a}la-akoma-ntoso.show-structure .akn-book::before,la-akoma-ntoso.show-structure-hier .akn-book::before{content:\"book\";position:absolute;top:0px;left:0px;color:black;background-color:#efb69a;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-chapter,la-akoma-ntoso.show-structure-hier .akn-chapter{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #efc59a}la-akoma-ntoso.show-structure .akn-chapter::before,la-akoma-ntoso.show-structure-hier .akn-chapter::before{content:\"chapter\";position:absolute;top:0px;left:0px;color:black;background-color:#efc59a;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-clause,la-akoma-ntoso.show-structure-hier .akn-clause{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #efd39a}la-akoma-ntoso.show-structure .akn-clause::before,la-akoma-ntoso.show-structure-hier .akn-clause::before{content:\"clause\";position:absolute;top:0px;left:0px;color:black;background-color:#efd39a;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-division,la-akoma-ntoso.show-structure-hier .akn-division{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #efe19a}la-akoma-ntoso.show-structure .akn-division::before,la-akoma-ntoso.show-structure-hier .akn-division::before{content:\"division\";position:absolute;top:0px;left:0px;color:black;background-color:#efe19a;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-hcontainer,la-akoma-ntoso.show-structure-hier .akn-hcontainer{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #efef9a}la-akoma-ntoso.show-structure .akn-hcontainer::before,la-akoma-ntoso.show-structure-hier .akn-hcontainer::before{content:\"hcontainer\";position:absolute;top:0px;left:0px;color:black;background-color:#efef9a;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-indent,la-akoma-ntoso.show-structure-hier .akn-indent{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #e1ef9a}la-akoma-ntoso.show-structure .akn-indent::before,la-akoma-ntoso.show-structure-hier .akn-indent::before{content:\"indent\";position:absolute;top:0px;left:0px;color:black;background-color:#e1ef9a;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-level,la-akoma-ntoso.show-structure-hier .akn-level{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #d3ef9a}la-akoma-ntoso.show-structure .akn-level::before,la-akoma-ntoso.show-structure-hier .akn-level::before{content:\"level\";position:absolute;top:0px;left:0px;color:black;background-color:#d3ef9a;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-list,la-akoma-ntoso.show-structure-hier .akn-list{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #c5ef9a}la-akoma-ntoso.show-structure .akn-list::before,la-akoma-ntoso.show-structure-hier .akn-list::before{content:\"list\";position:absolute;top:0px;left:0px;color:black;background-color:#c5ef9a;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-paragraph,la-akoma-ntoso.show-structure-hier .akn-paragraph{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #b6ef9a}la-akoma-ntoso.show-structure .akn-paragraph::before,la-akoma-ntoso.show-structure-hier .akn-paragraph::before{content:\"para\";position:absolute;top:0px;left:0px;color:black;background-color:#b6ef9a;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-part,la-akoma-ntoso.show-structure-hier .akn-part{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #a8ef9a}la-akoma-ntoso.show-structure .akn-part::before,la-akoma-ntoso.show-structure-hier .akn-part::before{content:\"part\";position:absolute;top:0px;left:0px;color:black;background-color:#a8ef9a;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-point,la-akoma-ntoso.show-structure-hier .akn-point{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #9aef9a}la-akoma-ntoso.show-structure .akn-point::before,la-akoma-ntoso.show-structure-hier .akn-point::before{content:\"point\";position:absolute;top:0px;left:0px;color:black;background-color:#9aef9a;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-proviso,la-akoma-ntoso.show-structure-hier .akn-proviso{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #9aefa8}la-akoma-ntoso.show-structure .akn-proviso::before,la-akoma-ntoso.show-structure-hier .akn-proviso::before{content:\"proviso\";position:absolute;top:0px;left:0px;color:black;background-color:#9aefa8;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-rule,la-akoma-ntoso.show-structure-hier .akn-rule{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #9aefb6}la-akoma-ntoso.show-structure .akn-rule::before,la-akoma-ntoso.show-structure-hier .akn-rule::before{content:\"rule\";position:absolute;top:0px;left:0px;color:black;background-color:#9aefb6;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-section,la-akoma-ntoso.show-structure-hier .akn-section{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #9aefc5}la-akoma-ntoso.show-structure .akn-section::before,la-akoma-ntoso.show-structure-hier .akn-section::before{content:\"section\";position:absolute;top:0px;left:0px;color:black;background-color:#9aefc5;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-subchapter,la-akoma-ntoso.show-structure-hier .akn-subchapter{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #9aefd3}la-akoma-ntoso.show-structure .akn-subchapter::before,la-akoma-ntoso.show-structure-hier .akn-subchapter::before{content:\"subchapter\";position:absolute;top:0px;left:0px;color:black;background-color:#9aefd3;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-subclause,la-akoma-ntoso.show-structure-hier .akn-subclause{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #9aefe1}la-akoma-ntoso.show-structure .akn-subclause::before,la-akoma-ntoso.show-structure-hier .akn-subclause::before{content:\"subclause\";position:absolute;top:0px;left:0px;color:black;background-color:#9aefe1;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-subdivision,la-akoma-ntoso.show-structure-hier .akn-subdivision{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #9aefef}la-akoma-ntoso.show-structure .akn-subdivision::before,la-akoma-ntoso.show-structure-hier .akn-subdivision::before{content:\"subdivision\";position:absolute;top:0px;left:0px;color:black;background-color:#9aefef;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-sublist,la-akoma-ntoso.show-structure-hier .akn-sublist{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #9ae1ef}la-akoma-ntoso.show-structure .akn-sublist::before,la-akoma-ntoso.show-structure-hier .akn-sublist::before{content:\"sublist\";position:absolute;top:0px;left:0px;color:black;background-color:#9ae1ef;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-subparagraph,la-akoma-ntoso.show-structure-hier .akn-subparagraph{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #9ad3ef}la-akoma-ntoso.show-structure .akn-subparagraph::before,la-akoma-ntoso.show-structure-hier .akn-subparagraph::before{content:\"subpara\";position:absolute;top:0px;left:0px;color:black;background-color:#9ad3ef;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-subpart,la-akoma-ntoso.show-structure-hier .akn-subpart{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #9ac5ef}la-akoma-ntoso.show-structure .akn-subpart::before,la-akoma-ntoso.show-structure-hier .akn-subpart::before{content:\"subpart\";position:absolute;top:0px;left:0px;color:white;background-color:#9ac5ef;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-subrule,la-akoma-ntoso.show-structure-hier .akn-subrule{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #9ab6ef}la-akoma-ntoso.show-structure .akn-subrule::before,la-akoma-ntoso.show-structure-hier .akn-subrule::before{content:\"subrule\";position:absolute;top:0px;left:0px;color:white;background-color:#9ab6ef;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-subsection,la-akoma-ntoso.show-structure-hier .akn-subsection{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #9aa8ef}la-akoma-ntoso.show-structure .akn-subsection::before,la-akoma-ntoso.show-structure-hier .akn-subsection::before{content:\"subsection\";position:absolute;top:0px;left:0px;color:white;background-color:#9aa8ef;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-subtitle,la-akoma-ntoso.show-structure-hier .akn-subtitle{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #9a9aef}la-akoma-ntoso.show-structure .akn-subtitle::before,la-akoma-ntoso.show-structure-hier .akn-subtitle::before{content:\"subtitle\";position:absolute;top:0px;left:0px;color:white;background-color:#9a9aef;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-title,la-akoma-ntoso.show-structure-hier .akn-title{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #a89aef}la-akoma-ntoso.show-structure .akn-title::before,la-akoma-ntoso.show-structure-hier .akn-title::before{content:\"title\";position:absolute;top:0px;left:0px;color:white;background-color:#a89aef;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-tome,la-akoma-ntoso.show-structure-hier .akn-tome{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #b69aef}la-akoma-ntoso.show-structure .akn-tome::before,la-akoma-ntoso.show-structure-hier .akn-tome::before{content:\"tome\";position:absolute;top:0px;left:0px;color:white;background-color:#b69aef;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-transitional,la-akoma-ntoso.show-structure-hier .akn-transitional{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #c59aef}la-akoma-ntoso.show-structure .akn-transitional::before,la-akoma-ntoso.show-structure-hier .akn-transitional::before{content:\"transitional\";position:absolute;top:0px;left:0px;color:white;background-color:#c59aef;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-crossHeading,la-akoma-ntoso.show-structure-hier .akn-crossHeading{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #d39aef}la-akoma-ntoso.show-structure .akn-crossHeading::before,la-akoma-ntoso.show-structure-hier .akn-crossHeading::before{content:\"crossHeading\";position:absolute;top:0px;left:0px;color:white;background-color:#d39aef;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-hcontainer:not([data-name=hcontainer])::before,la-akoma-ntoso.show-structure-hier .akn-hcontainer:not([data-name=hcontainer])::before{content:\"HCONTAINER - \" attr(data-name) !important}la-akoma-ntoso.show-structure .akn-subsection:not(.akn--no-indent),la-akoma-ntoso.show-structure .akn-paragraph:not(.akn--no-indent),la-akoma-ntoso.show-structure .akn-subparagraph:not(.akn--no-indent),la-akoma-ntoso.show-structure .akn-blockList>.akn-item:not(.akn--no-indent),la-akoma-ntoso.show-structure-hier .akn-subsection:not(.akn--no-indent),la-akoma-ntoso.show-structure-hier .akn-paragraph:not(.akn--no-indent),la-akoma-ntoso.show-structure-hier .akn-subparagraph:not(.akn--no-indent),la-akoma-ntoso.show-structure-hier .akn-blockList>.akn-item:not(.akn--no-indent){padding-left:calc(3em + 3px)}la-akoma-ntoso.show-structure .akn-blockContainer,la-akoma-ntoso.show-structure-block .akn-blockContainer{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #efe89a}la-akoma-ntoso.show-structure .akn-blockContainer::before,la-akoma-ntoso.show-structure-block .akn-blockContainer::before{position:absolute;top:0px;left:0px;color:black;background-color:#efe89a;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-block,la-akoma-ntoso.show-structure-block .akn-block{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #e8ef9a}la-akoma-ntoso.show-structure .akn-block::before,la-akoma-ntoso.show-structure-block .akn-block::before{position:absolute;top:0px;left:0px;color:black;background-color:#e8ef9a;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-blockList,la-akoma-ntoso.show-structure-block .akn-blockList{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #daef9a}la-akoma-ntoso.show-structure .akn-blockList::before,la-akoma-ntoso.show-structure-block .akn-blockList::before{content:\"items\";position:absolute;top:0px;left:0px;color:black;background-color:#daef9a;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-conclusions,la-akoma-ntoso.show-structure-block .akn-conclusions{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #ccef9a}la-akoma-ntoso.show-structure .akn-conclusions::before,la-akoma-ntoso.show-structure-block .akn-conclusions::before{position:absolute;top:0px;left:0px;color:black;background-color:#ccef9a;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-coverPage,la-akoma-ntoso.show-structure-block .akn-coverPage{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #bdef9a}la-akoma-ntoso.show-structure .akn-coverPage::before,la-akoma-ntoso.show-structure-block .akn-coverPage::before{position:absolute;top:0px;left:0px;color:black;background-color:#bdef9a;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-foreign,la-akoma-ntoso.show-structure-block .akn-foreign{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #afef9a}la-akoma-ntoso.show-structure .akn-foreign::before,la-akoma-ntoso.show-structure-block .akn-foreign::before{position:absolute;top:0px;left:0px;color:black;background-color:#afef9a;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-item,la-akoma-ntoso.show-structure-block .akn-item{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #a1ef9a}la-akoma-ntoso.show-structure .akn-item::before,la-akoma-ntoso.show-structure-block .akn-item::before{content:\"item\";position:absolute;top:0px;left:0px;color:black;background-color:#a1ef9a;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-ol,la-akoma-ntoso.show-structure-block .akn-ol{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #9aefa1}la-akoma-ntoso.show-structure .akn-ol::before,la-akoma-ntoso.show-structure-block .akn-ol::before{position:absolute;top:0px;left:0px;color:black;background-color:#9aefa1;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-preamble,la-akoma-ntoso.show-structure-block .akn-preamble{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #9aefbd}la-akoma-ntoso.show-structure .akn-preamble::before,la-akoma-ntoso.show-structure-block .akn-preamble::before{content:\"preamble\";position:absolute;top:0px;left:0px;color:black;background-color:#9aefbd;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-preface,la-akoma-ntoso.show-structure-block .akn-preface{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #9aefcc}la-akoma-ntoso.show-structure .akn-preface::before,la-akoma-ntoso.show-structure-block .akn-preface::before{content:\"preface\";position:absolute;top:0px;left:0px;color:black;background-color:#9aefcc;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-tblock,la-akoma-ntoso.show-structure-block .akn-tblock{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #9aefda}la-akoma-ntoso.show-structure .akn-tblock::before,la-akoma-ntoso.show-structure-block .akn-tblock::before{position:absolute;top:0px;left:0px;color:black;background-color:#9aefda;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-toc,la-akoma-ntoso.show-structure-block .akn-toc{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #9aefe8}la-akoma-ntoso.show-structure .akn-toc::before,la-akoma-ntoso.show-structure-block .akn-toc::before{position:absolute;top:0px;left:0px;color:black;background-color:#9aefe8;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-ul,la-akoma-ntoso.show-structure-block .akn-ul{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #9ae8ef}la-akoma-ntoso.show-structure .akn-ul::before,la-akoma-ntoso.show-structure-block .akn-ul::before{content:\"bullets\";position:absolute;top:0px;left:0px;color:black;background-color:#9ae8ef;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn--table-container,la-akoma-ntoso.show-structure-block .akn--table-container{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #efe89a}la-akoma-ntoso.show-structure .akn--table-container::before,la-akoma-ntoso.show-structure-block .akn--table-container::before{content:\"table\";position:absolute;top:0px;left:0px;color:black;background-color:#efe89a;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-abbr,la-akoma-ntoso.show-structure-inline .akn-abbr{background-color:rgba(175, 239, 154, 0.4);position:relative}la-akoma-ntoso.show-structure .akn-abbr:hover::before,la-akoma-ntoso.show-structure-inline .akn-abbr:hover::before{content:\"abbr\";color:black;background-color:#afef9a;position:absolute;top:-1.4em;left:0px;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase;white-space:nowrap}la-akoma-ntoso.show-structure .akn-remark,la-akoma-ntoso.show-structure-inline .akn-remark{background-color:rgba(161, 239, 154, 0.4);position:relative}la-akoma-ntoso.show-structure .akn-remark:hover::before,la-akoma-ntoso.show-structure-inline .akn-remark:hover::before{content:\"remark\";color:black;background-color:#a1ef9a;position:absolute;top:-1.4em;left:0px;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase;white-space:nowrap}la-akoma-ntoso.show-structure .akn-abbr:hover::before,la-akoma-ntoso.show-structure-inline .akn-abbr:hover::before{content:\"ABBR - \" attr(title);text-transform:none}la-akoma-ntoso.show-structure .akn-authorialNote,la-akoma-ntoso.show-structure-subflow .akn-authorialNote{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #efbd9a}la-akoma-ntoso.show-structure .akn-authorialNote::before,la-akoma-ntoso.show-structure-subflow .akn-authorialNote::before{content:\"footnote\";position:absolute;top:0px;left:0px;color:black;background-color:#efbd9a;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-embeddedStructure,la-akoma-ntoso.show-structure-subflow .akn-embeddedStructure{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #ccef9a}la-akoma-ntoso.show-structure .akn-embeddedStructure::before,la-akoma-ntoso.show-structure-subflow .akn-embeddedStructure::before{content:\"quote\";position:absolute;top:0px;left:0px;color:black;background-color:#ccef9a;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-attachment,la-akoma-ntoso.show-structure-doc-container .akn-attachment{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #efcc9a}la-akoma-ntoso.show-structure .akn-attachment::before,la-akoma-ntoso.show-structure-doc-container .akn-attachment::before{content:\"attachment\";position:absolute;top:0px;left:0px;color:black;background-color:#efcc9a;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}la-akoma-ntoso.show-structure .akn-component,la-akoma-ntoso.show-structure-doc-container .akn-component{position:relative;padding-top:1.2em;padding-left:3px;border-left:2px solid #bdef9a}la-akoma-ntoso.show-structure .akn-component::before,la-akoma-ntoso.show-structure-doc-container .akn-component::before{content:\"component\";position:absolute;top:0px;left:0px;color:black;background-color:#bdef9a;border-top-right-radius:5px;padding:0px 4px;font-family:sans-serif;font-weight:normal;font-style:normal;font-size:11px;text-transform:uppercase}";

let AkomaNtoso = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
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
  }
  componentWillLoad() {
    if (this.frbrExpressionUri)
      this.parseFrbrExpressionUri(this.frbrExpressionUri);
  }
  static get watchers() { return {
    "frbrExpressionUri": ["parseFrbrExpressionUri"]
  }; }
  static get style() { return akomaNtosoCss; }
};

function getAkomaNtosoElement(component, selector) {
  if (selector) {
    return selector instanceof HTMLElement ? selector : component.ownerDocument.querySelector(selector);
  }
  // try the nearest ancestor
  let el = component.closest('la-akoma-ntoso');
  if (!el) {
    // try the first on the page
    el = component.ownerDocument.querySelector('la-akoma-ntoso');
  }
  return el;
}

var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

function isElement$1(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


const applyStyles$1 = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect$2,
  requires: ['computeStyles']
};

function getBasePlacement$1(placement) {
  return placement.split('-')[0];
}

// import { isHTMLElement } from './instanceOf';
function getBoundingClientRect(element, // eslint-disable-next-line unused-imports/no-unused-vars
includeScale) {

  var rect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1; // FIXME:
  // `offsetWidth` returns an integer while `getBoundingClientRect`
  // returns a float. This results in `scaleX` or `scaleY` being
  // non-1 when it should be for elements that aren't a full pixel in
  // width or height.
  // if (isHTMLElement(element) && includeScale) {
  //   const offsetHeight = element.offsetHeight;
  //   const offsetWidth = element.offsetWidth;
  //   // Do not attempt to divide by 0, otherwise we get `Infinity` as scale
  //   // Fallback to 1 in case both values are `0`
  //   if (offsetWidth > 0) {
  //     scaleX = rect.width / offsetWidth || 1;
  //   }
  //   if (offsetHeight > 0) {
  //     scaleY = rect.height / offsetHeight || 1;
  //   }
  // }

  return {
    width: rect.width / scaleX,
    height: rect.height / scaleY,
    top: rect.top / scaleY,
    right: rect.right / scaleX,
    bottom: rect.bottom / scaleY,
    left: rect.left / scaleX,
    x: rect.left / scaleX,
    y: rect.top / scaleY
  };
}

// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement$1(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}

function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  var isIE = navigator.userAgent.indexOf('Trident') !== -1;

  if (isIE && isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = getComputedStyle(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = getParentNode(element);

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

var max = Math.max;
var min = Math.min;
var round = Math.round;

function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}

function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement$1(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect$1(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (!contains(state.elements.popper, arrowElement)) {

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


const arrow$1 = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect$1,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};

function getVariation(placement) {
  return placement.split('-')[1];
}

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(round(x * dpr) / dpr) || 0,
    y: round(round(y * dpr) / dpr) || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets;

  var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets,
      _ref3$x = _ref3.x,
      x = _ref3$x === void 0 ? 0 : _ref3$x,
      _ref3$y = _ref3.y,
      y = _ref3$y === void 0 ? 0 : _ref3$y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);

      if (getComputedStyle(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom; // $FlowFixMe[prop-missing]

      y -= offsetParent[heightProp] - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right; // $FlowFixMe[prop-missing]

      x -= offsetParent[widthProp] - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref4) {
  var state = _ref4.state,
      options = _ref4.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  var commonStyles = {
    placement: getBasePlacement$1(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


const computeStyles$1 = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
};

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


const eventListeners = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
};

var hash$1 = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash$1[matched];
  });
}

var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}

// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle(body || html).direction === 'rtl') {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}

function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement$1(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement$1(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement$1(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;
    }
  }

  return offsets;
}

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement$1(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement$1(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement$1(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement$1(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement$1(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement$1(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


const flip$1 = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};

function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


const hide$1 = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
};

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement$1(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


const offset$1 = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
};

function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


const popperOffsets$1 = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
};

function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement$1(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis || checkAltAxis) {
    var mainSide = mainAxis === 'y' ? top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min$1 = popperOffsets[mainAxis] + overflow[mainSide];
    var max$1 = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;

    if (checkMainAxis) {
      var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
      popperOffsets[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset;
    }

    if (checkAltAxis) {
      var _mainSide = mainAxis === 'x' ? top : left;

      var _altSide = mainAxis === 'x' ? bottom : right;

      var _offset = popperOffsets[altAxis];

      var _min = _offset + overflow[_mainSide];

      var _max = _offset - overflow[_altSide];

      var _preventedOffset = within(tether ? min(_min, tetherMin) : _min, _offset, tether ? max(_max, tetherMax) : _max);

      popperOffsets[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


const preventOverflow$1 = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
};

function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = rect.width / element.offsetWidth || 1;
  var scaleY = rect.height / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

function debounce$2(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: isElement$1(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });

        for (var index = 0; index < state.orderedModifiers.length; index++) {

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce$2(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}

var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

/**!
* tippy.js v6.3.2
* (c) 2017-2021 atomiks
* MIT License
*/
var BOX_CLASS = "tippy-box";
var CONTENT_CLASS = "tippy-content";
var BACKDROP_CLASS = "tippy-backdrop";
var ARROW_CLASS = "tippy-arrow";
var SVG_ARROW_CLASS = "tippy-svg-arrow";
var TOUCH_OPTIONS = {
  passive: true,
  capture: true
};
var TIPPY_DEFAULT_APPEND_TO = function TIPPY_DEFAULT_APPEND_TO() {
  return document.body;
};
function getValueAtIndexOrReturn(value, index, defaultValue) {
  if (Array.isArray(value)) {
    var v = value[index];
    return v == null ? Array.isArray(defaultValue) ? defaultValue[index] : defaultValue : v;
  }

  return value;
}
function isType(value, type) {
  var str = {}.toString.call(value);
  return str.indexOf('[object') === 0 && str.indexOf(type + "]") > -1;
}
function invokeWithArgsOrReturn(value, args) {
  return typeof value === 'function' ? value.apply(void 0, args) : value;
}
function debounce$1(fn, ms) {
  // Avoid wrapping in `setTimeout` if ms is 0 anyway
  if (ms === 0) {
    return fn;
  }

  var timeout;
  return function (arg) {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      fn(arg);
    }, ms);
  };
}
function splitBySpaces(value) {
  return value.split(/\s+/).filter(Boolean);
}
function normalizeToArray(value) {
  return [].concat(value);
}
function pushIfUnique(arr, value) {
  if (arr.indexOf(value) === -1) {
    arr.push(value);
  }
}
function unique(arr) {
  return arr.filter(function (item, index) {
    return arr.indexOf(item) === index;
  });
}
function getBasePlacement(placement) {
  return placement.split('-')[0];
}
function arrayFrom(value) {
  return [].slice.call(value);
}
function removeUndefinedProps(obj) {
  return Object.keys(obj).reduce(function (acc, key) {
    if (obj[key] !== undefined) {
      acc[key] = obj[key];
    }

    return acc;
  }, {});
}

function div() {
  return document.createElement('div');
}
function isElement(value) {
  return ['Element', 'Fragment'].some(function (type) {
    return isType(value, type);
  });
}
function isNodeList(value) {
  return isType(value, 'NodeList');
}
function isMouseEvent(value) {
  return isType(value, 'MouseEvent');
}
function isReferenceElement(value) {
  return !!(value && value._tippy && value._tippy.reference === value);
}
function getArrayOfElements(value) {
  if (isElement(value)) {
    return [value];
  }

  if (isNodeList(value)) {
    return arrayFrom(value);
  }

  if (Array.isArray(value)) {
    return value;
  }

  return arrayFrom(document.querySelectorAll(value));
}
function setTransitionDuration(els, value) {
  els.forEach(function (el) {
    if (el) {
      el.style.transitionDuration = value + "ms";
    }
  });
}
function setVisibilityState(els, state) {
  els.forEach(function (el) {
    if (el) {
      el.setAttribute('data-state', state);
    }
  });
}
function getOwnerDocument(elementOrElements) {
  var _element$ownerDocumen;

  var _normalizeToArray = normalizeToArray(elementOrElements),
      element = _normalizeToArray[0]; // Elements created via a <template> have an ownerDocument with no reference to the body


  return (element == null ? void 0 : (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body) ? element.ownerDocument : document;
}
function isCursorOutsideInteractiveBorder(popperTreeData, event) {
  var clientX = event.clientX,
      clientY = event.clientY;
  return popperTreeData.every(function (_ref) {
    var popperRect = _ref.popperRect,
        popperState = _ref.popperState,
        props = _ref.props;
    var interactiveBorder = props.interactiveBorder;
    var basePlacement = getBasePlacement(popperState.placement);
    var offsetData = popperState.modifiersData.offset;

    if (!offsetData) {
      return true;
    }

    var topDistance = basePlacement === 'bottom' ? offsetData.top.y : 0;
    var bottomDistance = basePlacement === 'top' ? offsetData.bottom.y : 0;
    var leftDistance = basePlacement === 'right' ? offsetData.left.x : 0;
    var rightDistance = basePlacement === 'left' ? offsetData.right.x : 0;
    var exceedsTop = popperRect.top - clientY + topDistance > interactiveBorder;
    var exceedsBottom = clientY - popperRect.bottom - bottomDistance > interactiveBorder;
    var exceedsLeft = popperRect.left - clientX + leftDistance > interactiveBorder;
    var exceedsRight = clientX - popperRect.right - rightDistance > interactiveBorder;
    return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
  });
}
function updateTransitionEndListener(box, action, listener) {
  var method = action + "EventListener"; // some browsers apparently support `transition` (unprefixed) but only fire
  // `webkitTransitionEnd`...

  ['transitionend', 'webkitTransitionEnd'].forEach(function (event) {
    box[method](event, listener);
  });
}
/**
 * Compared to xxx.contains, this function works for dom structures with shadow
 * dom
 */

function actualContains(parent, child) {
  var target = child;

  while (target) {
    var _ref2;

    if (parent.contains(target)) {
      return true;
    }

    target = (_ref2 = target.getRootNode == null ? void 0 : target.getRootNode()) == null ? void 0 : _ref2.host;
  }

  return false;
}

var currentInput = {
  isTouch: false
};
var lastMouseMoveTime = 0;
/**
 * When a `touchstart` event is fired, it's assumed the user is using touch
 * input. We'll bind a `mousemove` event listener to listen for mouse input in
 * the future. This way, the `isTouch` property is fully dynamic and will handle
 * hybrid devices that use a mix of touch + mouse input.
 */

function onDocumentTouchStart() {
  if (currentInput.isTouch) {
    return;
  }

  currentInput.isTouch = true;

  if (window.performance) {
    document.addEventListener('mousemove', onDocumentMouseMove);
  }
}
/**
 * When two `mousemove` event are fired consecutively within 20ms, it's assumed
 * the user is using mouse input again. `mousemove` can fire on touch devices as
 * well, but very rarely that quickly.
 */

function onDocumentMouseMove() {
  var now = performance.now();

  if (now - lastMouseMoveTime < 20) {
    currentInput.isTouch = false;
    document.removeEventListener('mousemove', onDocumentMouseMove);
  }

  lastMouseMoveTime = now;
}
/**
 * When an element is in focus and has a tippy, leaving the tab/window and
 * returning causes it to show again. For mouse users this is unexpected, but
 * for keyboard use it makes sense.
 * TODO: find a better technique to solve this problem
 */

function onWindowBlur() {
  var activeElement = document.activeElement;

  if (isReferenceElement(activeElement)) {
    var instance = activeElement._tippy;

    if (activeElement.blur && !instance.state.isVisible) {
      activeElement.blur();
    }
  }
}
function bindGlobalEventListeners() {
  document.addEventListener('touchstart', onDocumentTouchStart, TOUCH_OPTIONS);
  window.addEventListener('blur', onWindowBlur);
}

var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
var isIE11 = isBrowser ? // @ts-ignore
!!window.msCrypto : false;

var pluginProps = {
  animateFill: false,
  followCursor: false,
  inlinePositioning: false,
  sticky: false
};
var renderProps = {
  allowHTML: false,
  animation: 'fade',
  arrow: true,
  content: '',
  inertia: false,
  maxWidth: 350,
  role: 'tooltip',
  theme: '',
  zIndex: 9999
};
var defaultProps = Object.assign({
  appendTo: TIPPY_DEFAULT_APPEND_TO,
  aria: {
    content: 'auto',
    expanded: 'auto'
  },
  delay: 0,
  duration: [300, 250],
  getReferenceClientRect: null,
  hideOnClick: true,
  ignoreAttributes: false,
  interactive: false,
  interactiveBorder: 2,
  interactiveDebounce: 0,
  moveTransition: '',
  offset: [0, 10],
  onAfterUpdate: function onAfterUpdate() {},
  onBeforeUpdate: function onBeforeUpdate() {},
  onCreate: function onCreate() {},
  onDestroy: function onDestroy() {},
  onHidden: function onHidden() {},
  onHide: function onHide() {},
  onMount: function onMount() {},
  onShow: function onShow() {},
  onShown: function onShown() {},
  onTrigger: function onTrigger() {},
  onUntrigger: function onUntrigger() {},
  onClickOutside: function onClickOutside() {},
  placement: 'top',
  plugins: [],
  popperOptions: {},
  render: null,
  showOnCreate: false,
  touch: true,
  trigger: 'mouseenter focus',
  triggerTarget: null
}, pluginProps, {}, renderProps);
var defaultKeys = Object.keys(defaultProps);
var setDefaultProps = function setDefaultProps(partialProps) {

  var keys = Object.keys(partialProps);
  keys.forEach(function (key) {
    defaultProps[key] = partialProps[key];
  });
};
function getExtendedPassedProps(passedProps) {
  var plugins = passedProps.plugins || [];
  var pluginProps = plugins.reduce(function (acc, plugin) {
    var name = plugin.name,
        defaultValue = plugin.defaultValue;

    if (name) {
      var _name;

      acc[name] = passedProps[name] !== undefined ? passedProps[name] : (_name = defaultProps[name]) != null ? _name : defaultValue;
    }

    return acc;
  }, {});
  return Object.assign({}, passedProps, {}, pluginProps);
}
function getDataAttributeProps(reference, plugins) {
  var propKeys = plugins ? Object.keys(getExtendedPassedProps(Object.assign({}, defaultProps, {
    plugins: plugins
  }))) : defaultKeys;
  var props = propKeys.reduce(function (acc, key) {
    var valueAsString = (reference.getAttribute("data-tippy-" + key) || '').trim();

    if (!valueAsString) {
      return acc;
    }

    if (key === 'content') {
      acc[key] = valueAsString;
    } else {
      try {
        acc[key] = JSON.parse(valueAsString);
      } catch (e) {
        acc[key] = valueAsString;
      }
    }

    return acc;
  }, {});
  return props;
}
function evaluateProps(reference, props) {
  var out = Object.assign({}, props, {
    content: invokeWithArgsOrReturn(props.content, [reference])
  }, props.ignoreAttributes ? {} : getDataAttributeProps(reference, props.plugins));
  out.aria = Object.assign({}, defaultProps.aria, {}, out.aria);
  out.aria = {
    expanded: out.aria.expanded === 'auto' ? props.interactive : out.aria.expanded,
    content: out.aria.content === 'auto' ? props.interactive ? null : 'describedby' : out.aria.content
  };
  return out;
}

var innerHTML = function innerHTML() {
  return 'innerHTML';
};

function dangerouslySetInnerHTML(element, html) {
  element[innerHTML()] = html;
}

function createArrowElement(value) {
  var arrow = div();

  if (value === true) {
    arrow.className = ARROW_CLASS;
  } else {
    arrow.className = SVG_ARROW_CLASS;

    if (isElement(value)) {
      arrow.appendChild(value);
    } else {
      dangerouslySetInnerHTML(arrow, value);
    }
  }

  return arrow;
}

function setContent(content, props) {
  if (isElement(props.content)) {
    dangerouslySetInnerHTML(content, '');
    content.appendChild(props.content);
  } else if (typeof props.content !== 'function') {
    if (props.allowHTML) {
      dangerouslySetInnerHTML(content, props.content);
    } else {
      content.textContent = props.content;
    }
  }
}
function getChildren(popper) {
  var box = popper.firstElementChild;
  var boxChildren = arrayFrom(box.children);
  return {
    box: box,
    content: boxChildren.find(function (node) {
      return node.classList.contains(CONTENT_CLASS);
    }),
    arrow: boxChildren.find(function (node) {
      return node.classList.contains(ARROW_CLASS) || node.classList.contains(SVG_ARROW_CLASS);
    }),
    backdrop: boxChildren.find(function (node) {
      return node.classList.contains(BACKDROP_CLASS);
    })
  };
}
function render(instance) {
  var popper = div();
  var box = div();
  box.className = BOX_CLASS;
  box.setAttribute('data-state', 'hidden');
  box.setAttribute('tabindex', '-1');
  var content = div();
  content.className = CONTENT_CLASS;
  content.setAttribute('data-state', 'hidden');
  setContent(content, instance.props);
  popper.appendChild(box);
  box.appendChild(content);
  onUpdate(instance.props, instance.props);

  function onUpdate(prevProps, nextProps) {
    var _getChildren = getChildren(popper),
        box = _getChildren.box,
        content = _getChildren.content,
        arrow = _getChildren.arrow;

    if (nextProps.theme) {
      box.setAttribute('data-theme', nextProps.theme);
    } else {
      box.removeAttribute('data-theme');
    }

    if (typeof nextProps.animation === 'string') {
      box.setAttribute('data-animation', nextProps.animation);
    } else {
      box.removeAttribute('data-animation');
    }

    if (nextProps.inertia) {
      box.setAttribute('data-inertia', '');
    } else {
      box.removeAttribute('data-inertia');
    }

    box.style.maxWidth = typeof nextProps.maxWidth === 'number' ? nextProps.maxWidth + "px" : nextProps.maxWidth;

    if (nextProps.role) {
      box.setAttribute('role', nextProps.role);
    } else {
      box.removeAttribute('role');
    }

    if (prevProps.content !== nextProps.content || prevProps.allowHTML !== nextProps.allowHTML) {
      setContent(content, instance.props);
    }

    if (nextProps.arrow) {
      if (!arrow) {
        box.appendChild(createArrowElement(nextProps.arrow));
      } else if (prevProps.arrow !== nextProps.arrow) {
        box.removeChild(arrow);
        box.appendChild(createArrowElement(nextProps.arrow));
      }
    } else if (arrow) {
      box.removeChild(arrow);
    }
  }

  return {
    popper: popper,
    onUpdate: onUpdate
  };
} // Runtime check to identify if the render function is the default one; this
// way we can apply default CSS transitions logic and it can be tree-shaken away

render.$$tippy = true;

var idCounter = 1;
var mouseMoveListeners = []; // Used by `hideAll()`

var mountedInstances = [];
function createTippy(reference, passedProps) {
  var props = evaluateProps(reference, Object.assign({}, defaultProps, {}, getExtendedPassedProps(removeUndefinedProps(passedProps)))); // ===========================================================================
  // 🔒 Private members
  // ===========================================================================

  var showTimeout;
  var hideTimeout;
  var scheduleHideAnimationFrame;
  var isVisibleFromClick = false;
  var didHideDueToDocumentMouseDown = false;
  var didTouchMove = false;
  var ignoreOnFirstUpdate = false;
  var lastTriggerEvent;
  var currentTransitionEndListener;
  var onFirstUpdate;
  var listeners = [];
  var debouncedOnMouseMove = debounce$1(onMouseMove, props.interactiveDebounce);
  var currentTarget; // ===========================================================================
  // 🔑 Public members
  // ===========================================================================

  var id = idCounter++;
  var popperInstance = null;
  var plugins = unique(props.plugins);
  var state = {
    // Is the instance currently enabled?
    isEnabled: true,
    // Is the tippy currently showing and not transitioning out?
    isVisible: false,
    // Has the instance been destroyed?
    isDestroyed: false,
    // Is the tippy currently mounted to the DOM?
    isMounted: false,
    // Has the tippy finished transitioning in?
    isShown: false
  };
  var instance = {
    // properties
    id: id,
    reference: reference,
    popper: div(),
    popperInstance: popperInstance,
    props: props,
    state: state,
    plugins: plugins,
    // methods
    clearDelayTimeouts: clearDelayTimeouts,
    setProps: setProps,
    setContent: setContent,
    show: show,
    hide: hide,
    hideWithInteractivity: hideWithInteractivity,
    enable: enable,
    disable: disable,
    unmount: unmount,
    destroy: destroy
  }; // TODO: Investigate why this early return causes a TDZ error in the tests —
  // it doesn't seem to happen in the browser

  /* istanbul ignore if */

  if (!props.render) {

    return instance;
  } // ===========================================================================
  // Initial mutations
  // ===========================================================================


  var _props$render = props.render(instance),
      popper = _props$render.popper,
      onUpdate = _props$render.onUpdate;

  popper.setAttribute('data-tippy-root', '');
  popper.id = "tippy-" + instance.id;
  instance.popper = popper;
  reference._tippy = instance;
  popper._tippy = instance;
  var pluginsHooks = plugins.map(function (plugin) {
    return plugin.fn(instance);
  });
  var hasAriaExpanded = reference.hasAttribute('aria-expanded');
  addListeners();
  handleAriaExpandedAttribute();
  handleStyles();
  invokeHook('onCreate', [instance]);

  if (props.showOnCreate) {
    scheduleShow();
  } // Prevent a tippy with a delay from hiding if the cursor left then returned
  // before it started hiding


  popper.addEventListener('mouseenter', function () {
    if (instance.props.interactive && instance.state.isVisible) {
      instance.clearDelayTimeouts();
    }
  });
  popper.addEventListener('mouseleave', function (event) {
    if (instance.props.interactive && instance.props.trigger.indexOf('mouseenter') >= 0) {
      getDocument().addEventListener('mousemove', debouncedOnMouseMove);
      debouncedOnMouseMove(event);
    }
  });
  return instance; // ===========================================================================
  // 🔒 Private methods
  // ===========================================================================

  function getNormalizedTouchSettings() {
    var touch = instance.props.touch;
    return Array.isArray(touch) ? touch : [touch, 0];
  }

  function getIsCustomTouchBehavior() {
    return getNormalizedTouchSettings()[0] === 'hold';
  }

  function getIsDefaultRenderFn() {
    var _instance$props$rende;

    // @ts-ignore
    return !!((_instance$props$rende = instance.props.render) == null ? void 0 : _instance$props$rende.$$tippy);
  }

  function getCurrentTarget() {
    return currentTarget || reference;
  }

  function getDocument() {
    var parent = getCurrentTarget().parentNode;
    return parent ? getOwnerDocument(parent) : document;
  }

  function getDefaultTemplateChildren() {
    return getChildren(popper);
  }

  function getDelay(isShow) {
    // For touch or keyboard input, force `0` delay for UX reasons
    // Also if the instance is mounted but not visible (transitioning out),
    // ignore delay
    if (instance.state.isMounted && !instance.state.isVisible || currentInput.isTouch || lastTriggerEvent && lastTriggerEvent.type === 'focus') {
      return 0;
    }

    return getValueAtIndexOrReturn(instance.props.delay, isShow ? 0 : 1, defaultProps.delay);
  }

  function handleStyles() {
    popper.style.pointerEvents = instance.props.interactive && instance.state.isVisible ? '' : 'none';
    popper.style.zIndex = "" + instance.props.zIndex;
  }

  function invokeHook(hook, args, shouldInvokePropsHook) {
    if (shouldInvokePropsHook === void 0) {
      shouldInvokePropsHook = true;
    }

    pluginsHooks.forEach(function (pluginHooks) {
      if (pluginHooks[hook]) {
        pluginHooks[hook].apply(void 0, args);
      }
    });

    if (shouldInvokePropsHook) {
      var _instance$props;

      (_instance$props = instance.props)[hook].apply(_instance$props, args);
    }
  }

  function handleAriaContentAttribute() {
    var aria = instance.props.aria;

    if (!aria.content) {
      return;
    }

    var attr = "aria-" + aria.content;
    var id = popper.id;
    var nodes = normalizeToArray(instance.props.triggerTarget || reference);
    nodes.forEach(function (node) {
      var currentValue = node.getAttribute(attr);

      if (instance.state.isVisible) {
        node.setAttribute(attr, currentValue ? currentValue + " " + id : id);
      } else {
        var nextValue = currentValue && currentValue.replace(id, '').trim();

        if (nextValue) {
          node.setAttribute(attr, nextValue);
        } else {
          node.removeAttribute(attr);
        }
      }
    });
  }

  function handleAriaExpandedAttribute() {
    if (hasAriaExpanded || !instance.props.aria.expanded) {
      return;
    }

    var nodes = normalizeToArray(instance.props.triggerTarget || reference);
    nodes.forEach(function (node) {
      if (instance.props.interactive) {
        node.setAttribute('aria-expanded', instance.state.isVisible && node === getCurrentTarget() ? 'true' : 'false');
      } else {
        node.removeAttribute('aria-expanded');
      }
    });
  }

  function cleanupInteractiveMouseListeners() {
    getDocument().removeEventListener('mousemove', debouncedOnMouseMove);
    mouseMoveListeners = mouseMoveListeners.filter(function (listener) {
      return listener !== debouncedOnMouseMove;
    });
  }

  function onDocumentPress(event) {
    // Moved finger to scroll instead of an intentional tap outside
    if (currentInput.isTouch) {
      if (didTouchMove || event.type === 'mousedown') {
        return;
      }
    }

    var actualTarget = event.composedPath && event.composedPath()[0] || event.target; // Clicked on interactive popper

    if (instance.props.interactive && actualContains(popper, actualTarget)) {
      return;
    } // Clicked on the event listeners target


    if (actualContains(getCurrentTarget(), actualTarget)) {
      if (currentInput.isTouch) {
        return;
      }

      if (instance.state.isVisible && instance.props.trigger.indexOf('click') >= 0) {
        return;
      }
    } else {
      invokeHook('onClickOutside', [instance, event]);
    }

    if (instance.props.hideOnClick === true) {
      instance.clearDelayTimeouts();
      instance.hide(); // `mousedown` event is fired right before `focus` if pressing the
      // currentTarget. This lets a tippy with `focus` trigger know that it
      // should not show

      didHideDueToDocumentMouseDown = true;
      setTimeout(function () {
        didHideDueToDocumentMouseDown = false;
      }); // The listener gets added in `scheduleShow()`, but this may be hiding it
      // before it shows, and hide()'s early bail-out behavior can prevent it
      // from being cleaned up

      if (!instance.state.isMounted) {
        removeDocumentPress();
      }
    }
  }

  function onTouchMove() {
    didTouchMove = true;
  }

  function onTouchStart() {
    didTouchMove = false;
  }

  function addDocumentPress() {
    var doc = getDocument();
    doc.addEventListener('mousedown', onDocumentPress, true);
    doc.addEventListener('touchend', onDocumentPress, TOUCH_OPTIONS);
    doc.addEventListener('touchstart', onTouchStart, TOUCH_OPTIONS);
    doc.addEventListener('touchmove', onTouchMove, TOUCH_OPTIONS);
  }

  function removeDocumentPress() {
    var doc = getDocument();
    doc.removeEventListener('mousedown', onDocumentPress, true);
    doc.removeEventListener('touchend', onDocumentPress, TOUCH_OPTIONS);
    doc.removeEventListener('touchstart', onTouchStart, TOUCH_OPTIONS);
    doc.removeEventListener('touchmove', onTouchMove, TOUCH_OPTIONS);
  }

  function onTransitionedOut(duration, callback) {
    onTransitionEnd(duration, function () {
      if (!instance.state.isVisible && popper.parentNode && popper.parentNode.contains(popper)) {
        callback();
      }
    });
  }

  function onTransitionedIn(duration, callback) {
    onTransitionEnd(duration, callback);
  }

  function onTransitionEnd(duration, callback) {
    var box = getDefaultTemplateChildren().box;

    function listener(event) {
      if (event.target === box) {
        updateTransitionEndListener(box, 'remove', listener);
        callback();
      }
    } // Make callback synchronous if duration is 0
    // `transitionend` won't fire otherwise


    if (duration === 0) {
      return callback();
    }

    updateTransitionEndListener(box, 'remove', currentTransitionEndListener);
    updateTransitionEndListener(box, 'add', listener);
    currentTransitionEndListener = listener;
  }

  function on(eventType, handler, options) {
    if (options === void 0) {
      options = false;
    }

    var nodes = normalizeToArray(instance.props.triggerTarget || reference);
    nodes.forEach(function (node) {
      node.addEventListener(eventType, handler, options);
      listeners.push({
        node: node,
        eventType: eventType,
        handler: handler,
        options: options
      });
    });
  }

  function addListeners() {
    if (getIsCustomTouchBehavior()) {
      on('touchstart', onTrigger, {
        passive: true
      });
      on('touchend', onMouseLeave, {
        passive: true
      });
    }

    splitBySpaces(instance.props.trigger).forEach(function (eventType) {
      if (eventType === 'manual') {
        return;
      }

      on(eventType, onTrigger);

      switch (eventType) {
        case 'mouseenter':
          on('mouseleave', onMouseLeave);
          break;

        case 'focus':
          on(isIE11 ? 'focusout' : 'blur', onBlurOrFocusOut);
          break;

        case 'focusin':
          on('focusout', onBlurOrFocusOut);
          break;
      }
    });
  }

  function removeListeners() {
    listeners.forEach(function (_ref) {
      var node = _ref.node,
          eventType = _ref.eventType,
          handler = _ref.handler,
          options = _ref.options;
      node.removeEventListener(eventType, handler, options);
    });
    listeners = [];
  }

  function onTrigger(event) {
    var _lastTriggerEvent;

    var shouldScheduleClickHide = false;

    if (!instance.state.isEnabled || isEventListenerStopped(event) || didHideDueToDocumentMouseDown) {
      return;
    }

    var wasFocused = ((_lastTriggerEvent = lastTriggerEvent) == null ? void 0 : _lastTriggerEvent.type) === 'focus';
    lastTriggerEvent = event;
    currentTarget = event.currentTarget;
    handleAriaExpandedAttribute();

    if (!instance.state.isVisible && isMouseEvent(event)) {
      // If scrolling, `mouseenter` events can be fired if the cursor lands
      // over a new target, but `mousemove` events don't get fired. This
      // causes interactive tooltips to get stuck open until the cursor is
      // moved
      mouseMoveListeners.forEach(function (listener) {
        return listener(event);
      });
    } // Toggle show/hide when clicking click-triggered tooltips


    if (event.type === 'click' && (instance.props.trigger.indexOf('mouseenter') < 0 || isVisibleFromClick) && instance.props.hideOnClick !== false && instance.state.isVisible) {
      shouldScheduleClickHide = true;
    } else {
      scheduleShow(event);
    }

    if (event.type === 'click') {
      isVisibleFromClick = !shouldScheduleClickHide;
    }

    if (shouldScheduleClickHide && !wasFocused) {
      scheduleHide(event);
    }
  }

  function onMouseMove(event) {
    var target = event.target;
    var isCursorOverReferenceOrPopper = getCurrentTarget().contains(target) || popper.contains(target);

    if (event.type === 'mousemove' && isCursorOverReferenceOrPopper) {
      return;
    }

    var popperTreeData = getNestedPopperTree().concat(popper).map(function (popper) {
      var _instance$popperInsta;

      var instance = popper._tippy;
      var state = (_instance$popperInsta = instance.popperInstance) == null ? void 0 : _instance$popperInsta.state;

      if (state) {
        return {
          popperRect: popper.getBoundingClientRect(),
          popperState: state,
          props: props
        };
      }

      return null;
    }).filter(Boolean);

    if (isCursorOutsideInteractiveBorder(popperTreeData, event)) {
      cleanupInteractiveMouseListeners();
      scheduleHide(event);
    }
  }

  function onMouseLeave(event) {
    var shouldBail = isEventListenerStopped(event) || instance.props.trigger.indexOf('click') >= 0 && isVisibleFromClick;

    if (shouldBail) {
      return;
    }

    if (instance.props.interactive) {
      instance.hideWithInteractivity(event);
      return;
    }

    scheduleHide(event);
  }

  function onBlurOrFocusOut(event) {
    if (instance.props.trigger.indexOf('focusin') < 0 && event.target !== getCurrentTarget()) {
      return;
    } // If focus was moved to within the popper


    if (instance.props.interactive && event.relatedTarget && popper.contains(event.relatedTarget)) {
      return;
    }

    scheduleHide(event);
  }

  function isEventListenerStopped(event) {
    return currentInput.isTouch ? getIsCustomTouchBehavior() !== event.type.indexOf('touch') >= 0 : false;
  }

  function createPopperInstance() {
    destroyPopperInstance();
    var _instance$props2 = instance.props,
        popperOptions = _instance$props2.popperOptions,
        placement = _instance$props2.placement,
        offset = _instance$props2.offset,
        getReferenceClientRect = _instance$props2.getReferenceClientRect,
        moveTransition = _instance$props2.moveTransition;
    var arrow = getIsDefaultRenderFn() ? getChildren(popper).arrow : null;
    var computedReference = getReferenceClientRect ? {
      getBoundingClientRect: getReferenceClientRect,
      contextElement: getReferenceClientRect.contextElement || getCurrentTarget()
    } : reference;
    var tippyModifier = {
      name: '$$tippy',
      enabled: true,
      phase: 'beforeWrite',
      requires: ['computeStyles'],
      fn: function fn(_ref2) {
        var state = _ref2.state;

        if (getIsDefaultRenderFn()) {
          var _getDefaultTemplateCh = getDefaultTemplateChildren(),
              box = _getDefaultTemplateCh.box;

          ['placement', 'reference-hidden', 'escaped'].forEach(function (attr) {
            if (attr === 'placement') {
              box.setAttribute('data-placement', state.placement);
            } else {
              if (state.attributes.popper["data-popper-" + attr]) {
                box.setAttribute("data-" + attr, '');
              } else {
                box.removeAttribute("data-" + attr);
              }
            }
          });
          state.attributes.popper = {};
        }
      }
    };
    var modifiers = [{
      name: 'offset',
      options: {
        offset: offset
      }
    }, {
      name: 'preventOverflow',
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    }, {
      name: 'flip',
      options: {
        padding: 5
      }
    }, {
      name: 'computeStyles',
      options: {
        adaptive: !moveTransition
      }
    }, tippyModifier];

    if (getIsDefaultRenderFn() && arrow) {
      modifiers.push({
        name: 'arrow',
        options: {
          element: arrow,
          padding: 3
        }
      });
    }

    modifiers.push.apply(modifiers, (popperOptions == null ? void 0 : popperOptions.modifiers) || []);
    instance.popperInstance = createPopper(computedReference, popper, Object.assign({}, popperOptions, {
      placement: placement,
      onFirstUpdate: onFirstUpdate,
      modifiers: modifiers
    }));
  }

  function destroyPopperInstance() {
    if (instance.popperInstance) {
      instance.popperInstance.destroy();
      instance.popperInstance = null;
    }
  }

  function mount() {
    var appendTo = instance.props.appendTo;
    var parentNode; // By default, we'll append the popper to the triggerTargets's parentNode so
    // it's directly after the reference element so the elements inside the
    // tippy can be tabbed to
    // If there are clipping issues, the user can specify a different appendTo
    // and ensure focus management is handled correctly manually

    var node = getCurrentTarget();

    if (instance.props.interactive && appendTo === TIPPY_DEFAULT_APPEND_TO || appendTo === 'parent') {
      parentNode = node.parentNode;
    } else {
      parentNode = invokeWithArgsOrReturn(appendTo, [node]);
    } // The popper element needs to exist on the DOM before its position can be
    // updated as Popper needs to read its dimensions


    if (!parentNode.contains(popper)) {
      parentNode.appendChild(popper);
    }

    createPopperInstance();
  }

  function getNestedPopperTree() {
    return arrayFrom(popper.querySelectorAll('[data-tippy-root]'));
  }

  function scheduleShow(event) {
    instance.clearDelayTimeouts();

    if (event) {
      invokeHook('onTrigger', [instance, event]);
    }

    addDocumentPress();
    var delay = getDelay(true);

    var _getNormalizedTouchSe = getNormalizedTouchSettings(),
        touchValue = _getNormalizedTouchSe[0],
        touchDelay = _getNormalizedTouchSe[1];

    if (currentInput.isTouch && touchValue === 'hold' && touchDelay) {
      delay = touchDelay;
    }

    if (delay) {
      showTimeout = setTimeout(function () {
        instance.show();
      }, delay);
    } else {
      instance.show();
    }
  }

  function scheduleHide(event) {
    instance.clearDelayTimeouts();
    invokeHook('onUntrigger', [instance, event]);

    if (!instance.state.isVisible) {
      removeDocumentPress();
      return;
    } // For interactive tippies, scheduleHide is added to a document.body handler
    // from onMouseLeave so must intercept scheduled hides from mousemove/leave
    // events when trigger contains mouseenter and click, and the tip is
    // currently shown as a result of a click.


    if (instance.props.trigger.indexOf('mouseenter') >= 0 && instance.props.trigger.indexOf('click') >= 0 && ['mouseleave', 'mousemove'].indexOf(event.type) >= 0 && isVisibleFromClick) {
      return;
    }

    var delay = getDelay(false);

    if (delay) {
      hideTimeout = setTimeout(function () {
        if (instance.state.isVisible) {
          instance.hide();
        }
      }, delay);
    } else {
      // Fixes a `transitionend` problem when it fires 1 frame too
      // late sometimes, we don't want hide() to be called.
      scheduleHideAnimationFrame = requestAnimationFrame(function () {
        instance.hide();
      });
    }
  } // ===========================================================================
  // 🔑 Public methods
  // ===========================================================================


  function enable() {
    instance.state.isEnabled = true;
  }

  function disable() {
    // Disabling the instance should also hide it
    // https://github.com/atomiks/tippy.js-react/issues/106
    instance.hide();
    instance.state.isEnabled = false;
  }

  function clearDelayTimeouts() {
    clearTimeout(showTimeout);
    clearTimeout(hideTimeout);
    cancelAnimationFrame(scheduleHideAnimationFrame);
  }

  function setProps(partialProps) {

    if (instance.state.isDestroyed) {
      return;
    }

    invokeHook('onBeforeUpdate', [instance, partialProps]);
    removeListeners();
    var prevProps = instance.props;
    var nextProps = evaluateProps(reference, Object.assign({}, instance.props, {}, partialProps, {
      ignoreAttributes: true
    }));
    instance.props = nextProps;
    addListeners();

    if (prevProps.interactiveDebounce !== nextProps.interactiveDebounce) {
      cleanupInteractiveMouseListeners();
      debouncedOnMouseMove = debounce$1(onMouseMove, nextProps.interactiveDebounce);
    } // Ensure stale aria-expanded attributes are removed


    if (prevProps.triggerTarget && !nextProps.triggerTarget) {
      normalizeToArray(prevProps.triggerTarget).forEach(function (node) {
        node.removeAttribute('aria-expanded');
      });
    } else if (nextProps.triggerTarget) {
      reference.removeAttribute('aria-expanded');
    }

    handleAriaExpandedAttribute();
    handleStyles();

    if (onUpdate) {
      onUpdate(prevProps, nextProps);
    }

    if (instance.popperInstance) {
      createPopperInstance(); // Fixes an issue with nested tippies if they are all getting re-rendered,
      // and the nested ones get re-rendered first.
      // https://github.com/atomiks/tippyjs-react/issues/177
      // TODO: find a cleaner / more efficient solution(!)

      getNestedPopperTree().forEach(function (nestedPopper) {
        // React (and other UI libs likely) requires a rAF wrapper as it flushes
        // its work in one
        requestAnimationFrame(nestedPopper._tippy.popperInstance.forceUpdate);
      });
    }

    invokeHook('onAfterUpdate', [instance, partialProps]);
  }

  function setContent(content) {
    instance.setProps({
      content: content
    });
  }

  function show() {


    var isAlreadyVisible = instance.state.isVisible;
    var isDestroyed = instance.state.isDestroyed;
    var isDisabled = !instance.state.isEnabled;
    var isTouchAndTouchDisabled = currentInput.isTouch && !instance.props.touch;
    var duration = getValueAtIndexOrReturn(instance.props.duration, 0, defaultProps.duration);

    if (isAlreadyVisible || isDestroyed || isDisabled || isTouchAndTouchDisabled) {
      return;
    } // Normalize `disabled` behavior across browsers.
    // Firefox allows events on disabled elements, but Chrome doesn't.
    // Using a wrapper element (i.e. <span>) is recommended.


    if (getCurrentTarget().hasAttribute('disabled')) {
      return;
    }

    invokeHook('onShow', [instance], false);

    if (instance.props.onShow(instance) === false) {
      return;
    }

    instance.state.isVisible = true;

    if (getIsDefaultRenderFn()) {
      popper.style.visibility = 'visible';
    }

    handleStyles();
    addDocumentPress();

    if (!instance.state.isMounted) {
      popper.style.transition = 'none';
    } // If flipping to the opposite side after hiding at least once, the
    // animation will use the wrong placement without resetting the duration


    if (getIsDefaultRenderFn()) {
      var _getDefaultTemplateCh2 = getDefaultTemplateChildren(),
          box = _getDefaultTemplateCh2.box,
          content = _getDefaultTemplateCh2.content;

      setTransitionDuration([box, content], 0);
    }

    onFirstUpdate = function onFirstUpdate() {
      var _instance$popperInsta2;

      if (!instance.state.isVisible || ignoreOnFirstUpdate) {
        return;
      }

      ignoreOnFirstUpdate = true; // reflow
      popper.style.transition = instance.props.moveTransition;

      if (getIsDefaultRenderFn() && instance.props.animation) {
        var _getDefaultTemplateCh3 = getDefaultTemplateChildren(),
            _box = _getDefaultTemplateCh3.box,
            _content = _getDefaultTemplateCh3.content;

        setTransitionDuration([_box, _content], duration);
        setVisibilityState([_box, _content], 'visible');
      }

      handleAriaContentAttribute();
      handleAriaExpandedAttribute();
      pushIfUnique(mountedInstances, instance); // certain modifiers (e.g. `maxSize`) require a second update after the
      // popper has been positioned for the first time

      (_instance$popperInsta2 = instance.popperInstance) == null ? void 0 : _instance$popperInsta2.forceUpdate();
      instance.state.isMounted = true;
      invokeHook('onMount', [instance]);

      if (instance.props.animation && getIsDefaultRenderFn()) {
        onTransitionedIn(duration, function () {
          instance.state.isShown = true;
          invokeHook('onShown', [instance]);
        });
      }
    };

    mount();
  }

  function hide() {


    var isAlreadyHidden = !instance.state.isVisible;
    var isDestroyed = instance.state.isDestroyed;
    var isDisabled = !instance.state.isEnabled;
    var duration = getValueAtIndexOrReturn(instance.props.duration, 1, defaultProps.duration);

    if (isAlreadyHidden || isDestroyed || isDisabled) {
      return;
    }

    invokeHook('onHide', [instance], false);

    if (instance.props.onHide(instance) === false) {
      return;
    }

    instance.state.isVisible = false;
    instance.state.isShown = false;
    ignoreOnFirstUpdate = false;
    isVisibleFromClick = false;

    if (getIsDefaultRenderFn()) {
      popper.style.visibility = 'hidden';
    }

    cleanupInteractiveMouseListeners();
    removeDocumentPress();
    handleStyles();

    if (getIsDefaultRenderFn()) {
      var _getDefaultTemplateCh4 = getDefaultTemplateChildren(),
          box = _getDefaultTemplateCh4.box,
          content = _getDefaultTemplateCh4.content;

      if (instance.props.animation) {
        setTransitionDuration([box, content], duration);
        setVisibilityState([box, content], 'hidden');
      }
    }

    handleAriaContentAttribute();
    handleAriaExpandedAttribute();

    if (instance.props.animation) {
      if (getIsDefaultRenderFn()) {
        onTransitionedOut(duration, instance.unmount);
      }
    } else {
      instance.unmount();
    }
  }

  function hideWithInteractivity(event) {

    getDocument().addEventListener('mousemove', debouncedOnMouseMove);
    pushIfUnique(mouseMoveListeners, debouncedOnMouseMove);
    debouncedOnMouseMove(event);
  }

  function unmount() {

    if (instance.state.isVisible) {
      instance.hide();
    }

    if (!instance.state.isMounted) {
      return;
    }

    destroyPopperInstance(); // If a popper is not interactive, it will be appended outside the popper
    // tree by default. This seems mainly for interactive tippies, but we should
    // find a workaround if possible

    getNestedPopperTree().forEach(function (nestedPopper) {
      nestedPopper._tippy.unmount();
    });

    if (popper.parentNode) {
      popper.parentNode.removeChild(popper);
    }

    mountedInstances = mountedInstances.filter(function (i) {
      return i !== instance;
    });
    instance.state.isMounted = false;
    invokeHook('onHidden', [instance]);
  }

  function destroy() {

    if (instance.state.isDestroyed) {
      return;
    }

    instance.clearDelayTimeouts();
    instance.unmount();
    removeListeners();
    delete reference._tippy;
    instance.state.isDestroyed = true;
    invokeHook('onDestroy', [instance]);
  }
}

function tippy(targets, optionalProps) {
  if (optionalProps === void 0) {
    optionalProps = {};
  }

  var plugins = defaultProps.plugins.concat(optionalProps.plugins || []);

  bindGlobalEventListeners();
  var passedProps = Object.assign({}, optionalProps, {
    plugins: plugins
  });
  var elements = getArrayOfElements(targets);

  var instances = elements.reduce(function (acc, reference) {
    var instance = reference && createTippy(reference, passedProps);

    if (instance) {
      acc.push(instance);
    }

    return acc;
  }, []);
  return isElement(targets) ? instances[0] : instances;
}

tippy.defaultProps = defaultProps;
tippy.setDefaultProps = setDefaultProps;
tippy.currentInput = currentInput;

// every time the popper is destroyed (i.e. a new target), removing the styles
// and causing transitions to break for singletons when the console is open, but
// most notably for non-transform styles being used, `gpuAcceleration: false`.

Object.assign({}, applyStyles$1, {
  effect: function effect(_ref) {
    var state = _ref.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: '0',
        top: '0',
        margin: '0'
      },
      arrow: {
        position: 'absolute'
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;

    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    } // intentionally return no cleanup function
    // return () => { ... }

  }
});

tippy.setDefaultProps({
  render: render
});

const decorateInternalRefsCss = "@import url(\"https://use.fontawesome.com/releases/v5.5.0/css/all.css\");.la-decorate-internal-refs__popup .tippy-box[data-animation=fade][data-state=hidden]{opacity:0}.la-decorate-internal-refs__popup [data-tippy-root]{max-width:calc(100vw - 10px)}.la-decorate-internal-refs__popup .tippy-box{position:relative;background-color:#333;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;white-space:normal;outline:0;-webkit-transition-property:visibility, opacity, -webkit-transform;transition-property:visibility, opacity, -webkit-transform;transition-property:transform, visibility, opacity;transition-property:transform, visibility, opacity, -webkit-transform}.la-decorate-internal-refs__popup .tippy-box[data-placement^=top]>.tippy-arrow{bottom:0}.la-decorate-internal-refs__popup .tippy-box[data-placement^=top]>.tippy-arrow:before{bottom:-7px;left:0;border-width:8px 8px 0;border-top-color:initial;-webkit-transform-origin:center top;transform-origin:center top}.la-decorate-internal-refs__popup .tippy-box[data-placement^=bottom]>.tippy-arrow{top:0}.la-decorate-internal-refs__popup .tippy-box[data-placement^=bottom]>.tippy-arrow:before{top:-7px;left:0;border-width:0 8px 8px;border-bottom-color:initial;-webkit-transform-origin:center bottom;transform-origin:center bottom}.la-decorate-internal-refs__popup .tippy-box[data-placement^=left]>.tippy-arrow{right:0}.la-decorate-internal-refs__popup .tippy-box[data-placement^=left]>.tippy-arrow:before{border-width:8px 0 8px 8px;border-left-color:initial;right:-7px;-webkit-transform-origin:center left;transform-origin:center left}.la-decorate-internal-refs__popup .tippy-box[data-placement^=right]>.tippy-arrow{left:0}.la-decorate-internal-refs__popup .tippy-box[data-placement^=right]>.tippy-arrow:before{left:-7px;border-width:8px 8px 8px 0;border-right-color:initial;-webkit-transform-origin:center right;transform-origin:center right}.la-decorate-internal-refs__popup .tippy-box[data-inertia][data-state=visible]{-webkit-transition-timing-function:cubic-bezier(0.54, 1.5, 0.38, 1.11);transition-timing-function:cubic-bezier(0.54, 1.5, 0.38, 1.11)}.la-decorate-internal-refs__popup .tippy-arrow{width:16px;height:16px;color:#333}.la-decorate-internal-refs__popup .tippy-arrow:before{content:\"\";position:absolute;border-color:transparent;border-style:solid}.la-decorate-internal-refs__popup .tippy-content{position:relative;padding:5px 9px;z-index:1}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border]{background-color:#fff;background-clip:padding-box;border:1px solid rgba(0, 8, 16, 0.15);color:#333;-webkit-box-shadow:0 4px 14px -2px rgba(0, 8, 16, 0.08);box-shadow:0 4px 14px -2px rgba(0, 8, 16, 0.08)}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border]>.tippy-backdrop{background-color:#fff}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border]>.tippy-arrow:after,.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border]>.tippy-svg-arrow:after{content:\"\";position:absolute;z-index:-1}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border]>.tippy-arrow:after{border-color:transparent;border-style:solid}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-arrow:before{border-top-color:#fff}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-arrow:after{border-top-color:rgba(0, 8, 16, 0.2);border-width:7px 7px 0;top:17px;left:1px}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-svg-arrow>svg{top:16px}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border][data-placement^=top]>.tippy-svg-arrow:after{top:17px}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-arrow:before{border-bottom-color:#fff;bottom:16px}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-arrow:after{border-bottom-color:rgba(0, 8, 16, 0.2);border-width:0 7px 7px;bottom:17px;left:1px}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-svg-arrow>svg{bottom:16px}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border][data-placement^=bottom]>.tippy-svg-arrow:after{bottom:17px}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-arrow:before{border-left-color:#fff}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-arrow:after{border-left-color:rgba(0, 8, 16, 0.2);border-width:7px 0 7px 7px;left:17px;top:1px}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-svg-arrow>svg{left:11px}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border][data-placement^=left]>.tippy-svg-arrow:after{left:12px}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-arrow:before{border-right-color:#fff;right:16px}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-arrow:after{border-width:7px 7px 7px 0;right:17px;top:1px;border-right-color:rgba(0, 8, 16, 0.2)}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-svg-arrow>svg{right:11px}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border][data-placement^=right]>.tippy-svg-arrow:after{right:12px}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border]>.tippy-svg-arrow{fill:#fff}.la-decorate-internal-refs__popup .tippy-box[data-theme~=light-border]>.tippy-svg-arrow:after{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCA2czEuNzk2LS4wMTMgNC42Ny0zLjYxNUM1Ljg1MS45IDYuOTMuMDA2IDggMGMxLjA3LS4wMDYgMi4xNDguODg3IDMuMzQzIDIuMzg1QzE0LjIzMyA2LjAwNSAxNiA2IDE2IDZIMHoiIGZpbGw9InJnYmEoMCwgOCwgMTYsIDAuMikiLz48L3N2Zz4=);background-size:16px 6px;width:16px;height:6px}.la-decorate-internal-refs__popup .tippy-content{padding:0}.la-decorate-internal-refs__popup .tippy-content__title{padding:0.5rem 0.75rem;margin-bottom:0;font-size:1rem;font-weight:bold;border-bottom:1px solid #ebebeb;border-top-left-radius:calc(0.3rem - 1px);border-top-right-radius:calc(0.3rem - 1px);background-color:#f7f7f7}.la-decorate-internal-refs__popup .tippy-content__body{padding:0.5rem 0.75rem;background-color:white}.la-decorate-internal-refs__popup .tippy-content la-akoma-ntoso{max-height:40vh;overflow-y:auto}la-akoma-ntoso.flag-internal-refs .akn-ref[href^=\"#\"]::after{content:\"\\f02e\";font-family:\"Font Awesome 5 Free\";font-size:0.8em;font-style:normal;font-weight:900;color:#9c27b0;padding-left:0.1em}";

let DecorateInternalRefs = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
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
  get el() { return this; }
  static get watchers() { return {
    "flag": ["changeFlag"],
    "popups": ["changePopups"]
  }; }
  static get style() { return decorateInternalRefsCss; }
};

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

let DecorateTerms = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
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
  get el() { return this; }
  static get watchers() { return {
    "popupDefinitions": ["changePopupDefinitions"]
  }; }
  static get style() { return decorateTermsCss; }
};

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
    items = [...items].sort(this.compareItems.bind(this));
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
      item.style.display = anchor ? 'block' : 'none';
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

let Gutter = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
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
    }
  }
  items() {
    return this.el.querySelectorAll('la-gutter-item');
  }
  get el() { return this; }
  static get style() { return gutterCss; }
};

const gutterItemCss = "la-gutter-item{display:block}";

let GutterItem = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
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
  static get style() { return gutterItemCss; }
};

let TableOfContents = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
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
  get el() { return this; }
  static get watchers() { return {
    "items": ["parseItemsProp"],
    "titleFilter": ["titleFilterChanged"]
  }; }
};

const tableOfContentsControllerCss = "la-table-of-contents-controller *{-webkit-box-sizing:border-box;box-sizing:border-box}la-table-of-contents-controller .search{width:100%;margin-bottom:5px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:relative}la-table-of-contents-controller .search__input{-ms-flex:1;flex:1}la-table-of-contents-controller .search__clear-btn{position:absolute;top:0;right:0;height:100%}la-table-of-contents-controller .toggle{margin-bottom:5px}la-table-of-contents-controller .toggle__expand-all-btn{margin-right:5px}";

let TableOfContentsController = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
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
  get el() { return this; }
  static get style() { return tableOfContentsControllerCss; }
};

const tocItemCss = "la-toc-item{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;width:100%}la-toc-item *{-webkit-box-sizing:border-box;box-sizing:border-box}la-toc-item .indented{width:1.4em;height:1.4em}la-toc-item .content{-ms-flex:1;flex:1}la-toc-item .content__action{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center}la-toc-item .content__action__title{-ms-flex-positive:1;flex-grow:1}la-toc-item .content__children{display:none}la-toc-item[expanded]>.content>.content__children{display:inherit}la-toc-item.excluded{display:none}la-toc-item .indented__toggle-btn{background-color:transparent;border:none;-webkit-box-shadow:none;box-shadow:none;cursor:pointer}";

let TocItem = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
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
      ? (h("button", { class: "indented__toggle-btn", type: "button", onClick: () => this.toggle() }, renderToggleBtnInner()))
      : null), h("div", { class: "content" }, h("div", { class: "content__action" }, this.prependHtml ? h("div", { class: "content__action__prepend", innerHTML: this.prependHtml }) : null, h("a", { href: `#${this.item.id || ''}`, class: "content__action__title", onClick: this.onItemTitleClick }, this.item.title), this.appendHtml ? h("div", { class: "content__action__append", innerHTML: this.appendHtml }) : null), h("div", { class: "content__children" }, this.item.children && this.item.children.length
      ? this.item.children.map((item) => (h("la-toc-item", { item: item, filteredItems: this.filteredItems, prependHtml: this.prependHtml, appendHtml: this.appendHtml, expandIconHtml: this.expandIconHtml, collapseIconHtml: this.collapseIconHtml })))
      : null))));
  }
  static get style() { return tocItemCss; }
};

const LaAkomaNtoso = /*@__PURE__*/proxyCustomElement(AkomaNtoso, [0,"la-akoma-ntoso",{"frbrExpressionUri":[1537,"frbr-expression-uri"],"frbrCountry":[1537,"frbr-country"],"frbrType":[1537,"frbr-type"],"frbrSubtype":[1537,"frbr-subtype"],"frbrAuthor":[1537,"frbr-author"],"frbrDate":[1537,"frbr-date"],"frbrNumber":[1537,"frbr-number"],"frbrExpressionDate":[1537,"frbr-expression-date"],"frbrLanguage":[1537,"frbr-language"]}]);
const LaDecorateInternalRefs = /*@__PURE__*/proxyCustomElement(DecorateInternalRefs, [0,"la-decorate-internal-refs",{"akomaNtoso":[1,"akoma-ntoso"],"popups":[4],"flag":[4]}]);
const LaDecorateTerms = /*@__PURE__*/proxyCustomElement(DecorateTerms, [0,"la-decorate-terms",{"akomaNtoso":[1,"akoma-ntoso"],"popupDefinitions":[4,"popup-definitions"],"linkTerms":[4,"link-terms"]}]);
const LaGutter = /*@__PURE__*/proxyCustomElement(Gutter, [0,"la-gutter",{"akomaNtoso":[1,"akoma-ntoso"]},[[0,"laItemChanged","itemChanged"],[0,"click","clicked"]]]);
const LaGutterItem = /*@__PURE__*/proxyCustomElement(GutterItem, [0,"la-gutter-item",{"anchor":[1],"active":[1540]},[[0,"click","onClick"]]]);
const LaTableOfContents = /*@__PURE__*/proxyCustomElement(TableOfContents, [4,"la-table-of-contents",{"items":[1],"titleFilter":[1,"title-filter"],"filteredItems":[32],"innerItems":[32]}]);
const LaTableOfContentsController = /*@__PURE__*/proxyCustomElement(TableOfContentsController, [4,"la-table-of-contents-controller",{"items":[1],"titleFilterPlaceholder":[1,"title-filter-placeholder"],"hideClearTitleFilterButton":[4,"hide-clear-title-filter-button"],"titleFilterClearBtnClasses":[1,"title-filter-clear-btn-classes"],"expandAllBtnClasses":[1,"expand-all-btn-classes"],"collapseAllBtnClasses":[1,"collapse-all-btn-classes"],"titleFilterInputClasses":[1,"title-filter-input-classes"],"titleFilter":[32]}]);
const LaTocItem = /*@__PURE__*/proxyCustomElement(TocItem, [0,"la-toc-item",{"item":[16],"filteredItems":[16],"prependHtml":[1,"prepend-html"],"appendHtml":[1,"append-html"],"expandIconHtml":[1,"expand-icon-html"],"collapseIconHtml":[1,"collapse-icon-html"],"expanded":[1540]}]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      LaAkomaNtoso,
  LaDecorateInternalRefs,
  LaDecorateTerms,
  LaGutter,
  LaGutterItem,
  LaTableOfContents,
  LaTableOfContentsController,
  LaTocItem
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { LaAkomaNtoso, LaDecorateInternalRefs, LaDecorateTerms, LaGutter, LaGutterItem, LaTableOfContents, LaTableOfContentsController, LaTocItem, defineCustomElements };
