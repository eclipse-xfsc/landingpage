"use strict";(self.webpackChunkdoc_saurus_example=self.webpackChunkdoc_saurus_example||[]).push([[670],{2216:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var i=t(4848),s=t(8453);const a={sidebar_position:2,title:"Organisation Credential Manager (OCM)"},o=void 0,r={id:"xfsc-toolbox/xfsc-foss-components/icam-and-trust/organisation-credential",title:"Organisation Credential Manager (OCM)",description:"Organisation Credential Manager (OCM) : The purpose of the service functions to be implemented is to establish trust between the different participants within the Gaia-X decentralized ecosystem. The OCM comprises all trust related functions required to manage and offer GAIA-X Self-Descriptions in the W3C Verifiable Credential format. To achieve this goal, components are required which on the one hand allow the management of assets and participants for the creation of signatures for various properties, attributes, and documents and on the other hand enable the verification of external documents. This includes",source:"@site/docs/xfsc-toolbox/xfsc-foss-components/icam-and-trust/organisation-credential.md",sourceDirName:"xfsc-toolbox/xfsc-foss-components/icam-and-trust",slug:"/xfsc-toolbox/xfsc-foss-components/icam-and-trust/organisation-credential",permalink:"/org.eclipse.xfsc/xfsc-toolbox/xfsc-foss-components/icam-and-trust/organisation-credential",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/xfsc-toolbox/xfsc-foss-components/icam-and-trust/organisation-credential.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Organisation Credential Manager (OCM)"},sidebar:"servicesSidebar",previous:{title:"Authentication/Authorisation (AAS)",permalink:"/org.eclipse.xfsc/xfsc-toolbox/xfsc-foss-components/icam-and-trust/authentication"},next:{title:"Personal Credential Manager (PCM)",permalink:"/org.eclipse.xfsc/xfsc-toolbox/xfsc-foss-components/icam-and-trust/personal-credential"}},c={},l=[{value:"OCM Extension",id:"ocm-extension",level:4},{value:"OCM W-Stack",id:"ocm-w-stack",level:3}];function d(e){const n={a:"a",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Organisation Credential Manager (OCM) : The purpose of the service functions to be implemented is to establish trust between the different participants within the Gaia-X decentralized ecosystem. The OCM comprises all trust related functions required to manage and offer GAIA-X Self-Descriptions in the W3C Verifiable Credential format. To achieve this goal, components are required which on the one hand allow the management of assets and participants for the creation of signatures for various properties, attributes, and documents and on the other hand enable the verification of external documents. This includes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The creation of verifiable credentials with a corresponding digital signature on the basis of an identity,"}),"\n",(0,i.jsx)(n.li,{children:"The issuing of verifiable presentations on the basis of existing and already received verifiable credentials,"}),"\n",(0,i.jsx)(n.li,{children:"The requesting of verifiable credentials from third parties for e.g., the attestation of own attributes,"}),"\n",(0,i.jsx)(n.li,{children:"As well as the validation of incoming connection requests and proof requests."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The format used for communication is based on the RFCs described in the Hyperledger Indy context and the standards of W3C and DIF in order to guarantee a uniform process flow and exchange formats. Therefore, the OCM enables a participant to interact with the SSI-based ecosystem in a trustworthy and secure manner."}),"\n",(0,i.jsx)(n.p,{children:"The OCM utilizes other components like GXFS Trust Services and offer many of the functions required from the GXFS Notarization API component."}),"\n",(0,i.jsx)(n.h4,{id:"ocm-extension",children:"OCM Extension"}),"\n",(0,i.jsxs)(n.p,{children:["The purpose of this extension is to provide changes to the OCM components to enhance the OCM in its functionality and adopt the latest Gaia-X requirements (e.g. Support of did",":web"," method and VC with JsonWebKey2020\u202f",(0,i.jsx)(n.a,{href:"https://docs.gaia-x.eu/technical-committee/identity-credential-access-management/22.10/credential_format/",children:"https://docs.gaia-x.eu/technical-committee/identity-credential-access-management/22.10/credential_format/"}),"), enabling secure interactions within the Self-Sovereign Identity (SSI)-based ecosystem. The Organization Credential Manager Extension 1 (OCM.E1) enhances the participant\u2019s interaction with the SSI-based ecosystem in a trustful and secure environment. This comprises the utilization of the participants digital identity for different functionalities:\u202f"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Extended management of secure and trustable connections with other parties (Connections in this context are private, secured, and persistent channels between entities)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Blocking of Connections"}),"\n",(0,i.jsx)(n.li,{children:"Handling of blocked connections"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Refreshing and Revocation of verifiable credentials from attesting parties (e.g., Gaia-X Membership credential from a verified notary)"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Utilization of AIP v2.0 alongside AIP v1.0 by updating the AFJ Framework"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Provision of verifiable Public Profile (service endpoints within OCM DID Document)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Configuration of Private Custom Endpoints (with DID-Auth/OIDC)"}),"\n",(0,i.jsx)(n.li,{children:"Configuration of Endpoint Mappings to internal/external functionality"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)("div",{class:"mtp-3",children:(0,i.jsx)("a",{href:"https://gitlab.eclipse.org/eclipse/xfsc/ocm",target:"_blank",class:"primaryBtn",children:"Repository"})}),"\n",(0,i.jsx)(n.h3,{id:"ocm-w-stack",children:"OCM W-Stack"}),"\n",(0,i.jsx)(n.p,{children:"The purpose of the OCM W-Stack is to provide all necessary components for the extension of the administration of the digital identity of a participant in the Gaia-X context. The OCM W-Stack enhances the participant\u2019s interaction with the SSI-based ecosystem in a trustful and secure fashion. This comprises the utilization of the participants digital identity for different functionalities:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Implementation of Full W3C DID/VC/VP Support for Credential Exchange and Trust"}),"\n",(0,i.jsxs)(n.li,{children:["Implementation of OpenID Standards","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"OpenID4VC/VP"}),"\n",(0,i.jsx)(n.li,{children:"SIOP"}),"\n",(0,i.jsx)(n.li,{children:"VC Issuance ProtocolExtension"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Establishment of secure and trustable connections with other parties"}),"\n",(0,i.jsx)(n.li,{children:"Request and reception of verifiable credentials from attesting parties (e.g., Gaia-X Membership credential from a verified notary) in JSON-LD Format"}),"\n",(0,i.jsx)(n.li,{children:"Attestation of attributes to principals in the form of verifiable credentials (e.g., employees, technical assets)"}),"\n",(0,i.jsx)(n.li,{children:"Validation of received verifiable presentations from other parties (e.g., validation of Gaia-X membership of other participants)"}),"\n",(0,i.jsx)(n.li,{children:"Maintenance of the verifiable Public Profile"}),"\n",(0,i.jsx)(n.li,{children:"Scalable VC/VP Storage"}),"\n",(0,i.jsx)(n.li,{children:"Graph Indexing for Linking VC/VP"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Same as the OCM the OCM W-Stack prioritize W3C compatibility, but technologically the OCM W-Stack will be a non-Indy implementation to become independent of Hyperledger Indy and maximize interoperability."}),"\n",(0,i.jsx)("div",{class:"mtp-3",children:(0,i.jsx)("a",{href:"https://gitlab.eclipse.org/eclipse/xfsc/organisational-credential-manager-w-stack",target:"_blank",class:"primaryBtn",children:"Repository"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var i=t(6540);const s={},a=i.createContext(s);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);