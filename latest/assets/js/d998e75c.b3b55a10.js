"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[702],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,h=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1617:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:7},c="Checking for schema changes",l={unversionedId:"getting_started/example_project-data_monitoring/checking_for_schema_changes",id:"getting_started/example_project-data_monitoring/checking_for_schema_changes",isDocsHomePage:!1,title:"Checking for schema changes",description:"Now we will tests one more aspect of redata, detecting schema changes. Let's simulate a change in one of the toyshop tables.",source:"@site/docs/getting_started/example_project-data_monitoring/checking_for_schema_changes.md",sourceDirName:"getting_started/example_project-data_monitoring",slug:"/getting_started/example_project-data_monitoring/checking_for_schema_changes",permalink:"/re-data/latest/docs/getting_started/example_project-data_monitoring/checking_for_schema_changes",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/getting_started/example_project-data_monitoring/checking_for_schema_changes.md",version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Checking for anomalies",permalink:"/re-data/latest/docs/getting_started/example_project-data_monitoring/compute_anomalies"},next:{title:"Data Cleaning",permalink:"/re-data/latest/docs/reference/data_preparation/data_cleaning"}},p=[{value:"Next steps",id:"next-steps",children:[]}],m={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"checking-for-schema-changes"},"Checking for schema changes"),(0,o.kt)("p",null,"Now we will tests one more aspect of re_data, detecting schema changes. Let's simulate a change in one of the toy_shop tables."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"alter table toy_shop.customers add column my_new_column integer;\n")),(0,o.kt)("p",null,"And now, we will run re_data again, but this time we will only compute models related to schema changes. Because of that, we don't need to pass time parameters as detecting schema changes doesn't need them. We use the ",(0,o.kt)("inlineCode",{parentName:"p"},"+")," sign to compute all required ancestors of ",(0,o.kt)("inlineCode",{parentName:"p"},"re_data_schema_changes")," model."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"dbt run --models +re_data_schema_changes\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"As computing a single model is definitely possible in ",(0,o.kt)("inlineCode",{parentName:"p"},"re_data"),", make sure you are also computing all model's ancestors, otherwise, sometimes models can just not refresh and not contain new data."))),(0,o.kt)("p",null,"Here is what our table will look like after this run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},'select table_name, operation, column_name, data_type, is_nullable, prev_column_name, prev_data_type, prev_is_nullable  from toy_shop_re.re_data_schema_changes ;\n\n            table_name             |  operation   |  column_name  | data_type | is_nullable | prev_column_name | prev_data_type | prev_is_nullable\n-----------------------------------+--------------+---------------+-----------+-------------+------------------+----------------+------------------\n "postgres"."toy_shop"."customers" | column_added | my_new_column | integer   | t           |                  |                |\n')),(0,o.kt)("p",null,"We can see, ",(0,o.kt)("inlineCode",{parentName:"p"},"my_new_column")," added here with the type and nullability of it. In case of a removed or modified column, ",(0,o.kt)("inlineCode",{parentName:"p"},"prev*")," fields will contain information about the previous type of column."),(0,o.kt)("p",null,"You can integrate re_data metrics any way you want with your current BI tools. And of course, re_data can be run from a command line by Airflow or another scheduling tool."),(0,o.kt)("h2",{id:"next-steps"},"Next steps"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Congrats")," on finishing our tutorial! We hope it was useful for you! \ud83d\ude42"))),(0,o.kt)("p",null,"There are couple ways you can integrate re_data into your dbt project."),(0,o.kt)("p",null,"When using apache Airflow as you job scheduler, it's recommended to run\nand compute ",(0,o.kt)("inlineCode",{parentName:"p"},"re_data")," after your main dbt project.\nYou can use both ",(0,o.kt)("inlineCode",{parentName:"p"},"re_data")," package or just plain ",(0,o.kt)("inlineCode",{parentName:"p"},"dbt")," for computing re_data models."),(0,o.kt)("p",null,"If you want to talk more about your setup, features to add or just say hi! We encourage you to join us on ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://join.slack.com/t/re-data/shared_invite/zt-vkauq1y8-tL4R4_H5nZoVvyXyy0hdug"},"Slack!"))," \ud83d\ude0a"))}d.isMDXComponent=!0}}]);