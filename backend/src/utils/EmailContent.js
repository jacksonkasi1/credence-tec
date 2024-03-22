

exports.ContactUs = async ({name, email, message}) => {
    return ` Hi ${name}
    <br />
    <br />
    Email: ${email}
    <br />
    <br />
    Message: ${message}
    `
    // return `
    // <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    // <html
    //   xmlns="http://www.w3.org/1999/xhtml"
    //   xmlns:v="urn:schemas-microsoft-com:vml"
    //   xmlns:o="urn:schemas-microsoft-com:office:office"
    // >
    //   <head>
    //     <!--[if gte mso 9]>
    //       <xml>
    //         <o:OfficeDocumentSettings>
    //           <o:AllowPNG />
    //           <o:PixelsPerInch>96</o:PixelsPerInch>
    //         </o:OfficeDocumentSettings>
    //       </xml>
    //     <![endif]-->
    //     <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    //     <meta name="x-apple-disable-message-reformatting" />
    //     <!--[if !mso]><!-->
    //     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    //     <!--<![endif]-->
    //     <title></title>

    //     <style type="text/css">
    //       @media only screen and (min-width: 520px) {
    //         .u-row {
    //           width: 500px !important;
    //         }

    //         .u-row .u-col {
    //           vertical-align: top;
    //         }

    //         .u-row .u-col-33p33 {
    //           width: 166.65px !important;
    //         }

    //         .u-row .u-col-100 {
    //           width: 500px !important;
    //         }
    //       }

    //       @media (max-width: 520px) {
    //         .u-row-container {
    //           max-width: 100% !important;
    //           padding-left: 0px !important;
    //           padding-right: 0px !important;
    //         }

    //         .u-row .u-col {
    //           min-width: 320px !important;
    //           max-width: 100% !important;
    //           display: block !important;
    //         }

    //         .u-row {
    //           width: 100% !important;
    //         }

    //         .u-col {
    //           width: 100% !important;
    //         }

    //         .u-col > div {
    //           margin: 0 auto;
    //         }

    //         .no-stack .u-col {
    //           min-width: 0 !important;
    //           display: table-cell !important;
    //         }

    //         .no-stack .u-col-33p33 {
    //           width: 33.33% !important;
    //         }
    //       }

    //       body {
    //         margin: 0;
    //         padding: 0;
    //       }

    //       table,
    //       tr,
    //       td {
    //         vertical-align: top;
    //         border-collapse: collapse;
    //       }

    //       p {
    //         margin: 0;
    //       }

    //       .ie-container table,
    //       .mso-container table {
    //         table-layout: fixed;
    //       }

    //       * {
    //         line-height: inherit;
    //       }

    //       a[x-apple-data-detectors="true"] {
    //         color: inherit !important;
    //         text-decoration: none !important;
    //       }

    //       table,
    //       td {
    //         color: #000000;
    //       }

    //       #u_body a {
    //         color: #0000ee;
    //         text-decoration: underline;
    //       }

    //       @media (max-width: 480px) {
    //         #u_row_3.v-row-padding--vertical {
    //           padding-top: 16px !important;
    //           padding-bottom: 16px !important;
    //         }

    //         #u_content_heading_1 .v-container-padding-padding {
    //           padding: 32px 32px 16px !important;
    //         }

    //         #u_content_heading_1 .v-font-size {
    //           font-size: 17px !important;
    //         }

    //         #u_content_text_1 .v-container-padding-padding {
    //           padding: 0px 32px 24px !important;
    //         }

    //         #u_content_text_1 .v-font-size {
    //           font-size: 13px !important;
    //         }

    //         #u_content_button_1 .v-size-width {
    //           width: auto !important;
    //         }

    //         #u_content_image_2 .v-src-width {
    //           width: auto !important;
    //         }

    //         #u_content_image_2 .v-src-max-width {
    //           max-width: 25% !important;
    //         }

    //         #u_content_image_3 .v-src-width {
    //           width: auto !important;
    //         }

    //         #u_content_image_3 .v-src-max-width {
    //           max-width: 25% !important;
    //         }

    //         #u_content_image_4 .v-src-width {
    //           width: auto !important;
    //         }

    //         #u_content_image_4 .v-src-max-width {
    //           max-width: 25% !important;
    //         }
    //       }
    //     </style>
    //   </head>

    //   <body
    //     class="clean-body u_body"
    //     style="
    //       margin: 0;
    //       padding: 0;
    //       -webkit-text-size-adjust: 100%;
    //       background-color: #e7e7e7;
    //       color: #000000;
    //     "
    //   >
    //     <!--[if IE]><div class="ie-container"><![endif]-->
    //     <!--[if mso]><div class="mso-container"><![endif]-->
    //     <table
    //       id="u_body"
    //       style="
    //         border-collapse: collapse;
    //         table-layout: fixed;
    //         border-spacing: 0;
    //         mso-table-lspace: 0pt;
    //         mso-table-rspace: 0pt;
    //         vertical-align: top;
    //         min-width: 320px;
    //         margin: 0 auto;
    //         background-color: #e7e7e7;
    //         width: 100%;
    //       "
    //       cellpadding="0"
    //       cellspacing="0"
    //     >
    //       <tbody>
    //         <tr style="vertical-align: top">
    //           <td
    //             style="
    //               word-break: break-word;
    //               border-collapse: collapse !important;
    //               vertical-align: top;
    //             "
    //           >
    //             <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->

    //             <div
    //               class="u-row-container v-row-padding--vertical"
    //               style="padding: 0px; background-color: #e7f3ff"
    //             >
    //               <div
    //                 class="u-row"
    //                 style="
    //                   margin: 0 auto;
    //                   min-width: 320px;
    //                   max-width: 500px;
    //                   overflow-wrap: break-word;
    //                   word-wrap: break-word;
    //                   word-break: break-word;
    //                   background-color: transparent;
    //                 "
    //               >
    //                 <div
    //                   style="
    //                     border-collapse: collapse;
    //                     display: table;
    //                     width: 100%;
    //                     height: 100%;
    //                     background-color: transparent;
    //                   "
    //                 >
    //                   <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #e7f3ff;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->

    //                   <!--[if (mso)|(IE)]><td align="center" width="500" style="width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
    //                   <div
    //                     class="u-col u-col-100"
    //                     style="
    //                       max-width: 320px;
    //                       min-width: 500px;
    //                       display: table-cell;
    //                       vertical-align: top;
    //                     "
    //                   >
    //                     <div style="height: 100%; width: 100% !important">
    //                       <!--[if (!mso)&(!IE)]><!-->
    //                       <div
    //                         style="
    //                           box-sizing: border-box;
    //                           height: 100%;
    //                           padding: 0px;
    //                           border-top: 0px solid transparent;
    //                           border-left: 0px solid transparent;
    //                           border-right: 0px solid transparent;
    //                           border-bottom: 0px solid transparent;
    //                         "
    //                       >
    //                         <!--<![endif]-->

    //                         <table
    //                           style="font-family: arial, helvetica, sans-serif"
    //                           role="presentation"
    //                           cellpadding="0"
    //                           cellspacing="0"
    //                           width="100%"
    //                           border="0"
    //                         >
    //                           <tbody>
    //                             <tr>
    //                               <td
    //                                 class="v-container-padding-padding"
    //                                 style="
    //                                   overflow-wrap: break-word;
    //                                   word-break: break-word;
    //                                   padding: 10px;
    //                                   font-family: arial, helvetica, sans-serif;
    //                                 "
    //                                 align="left"
    //                               >
    //                                 <table
    //                                   width="100%"
    //                                   cellpadding="0"
    //                                   cellspacing="0"
    //                                   border="0"
    //                                 >
    //                                   <tr>
    //                                     <td
    //                                       style="
    //                                         padding-right: 0px;
    //                                         padding-left: 0px;
    //                                       "
    //                                       align="center"
    //                                     >
    //                                       <img
    //                                         align="center"
    //                                         border="0"
    //                                         src="https://peacockimages.s3.ap-south-1.amazonaws.com/Logo.svg"
    //                                         alt=""
    //                                         title=""
    //                                         style="
    //                                           outline: none;
    //                                           text-decoration: none;
    //                                           -ms-interpolation-mode: bicubic;
    //                                           clear: both;
    //                                           display: inline-block !important;
    //                                           border: none;
    //                                           height: auto;
    //                                           float: none;
    //                                           width: 50%;
    //                                           max-width: 240px;
    //                                         "
    //                                         width="240"
    //                                         class="v-src-width v-src-max-width"
    //                                       />
    //                                     </td>
    //                                   </tr>
    //                                 </table>
    //                               </td>
    //                             </tr>
    //                           </tbody>
    //                         </table>

    //                         <!--[if (!mso)&(!IE)]><!-->
    //                       </div>
    //                       <!--<![endif]-->
    //                     </div>
    //                   </div>
    //                   <!--[if (mso)|(IE)]></td><![endif]-->
    //                   <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    //                 </div>
    //               </div>
    //             </div>

    //             <div
    //               id="u_row_3"
    //               class="u-row-container v-row-padding--vertical"
    //               style="padding: 24px; background-color: #e7f3ff"
    //             >
    //               <div
    //                 class="u-row"
    //                 style="
    //                   margin: 0 auto;
    //                   min-width: 320px;
    //                   max-width: 500px;
    //                   overflow-wrap: break-word;
    //                   word-wrap: break-word;
    //                   word-break: break-word;
    //                   background-color: transparent;
    //                 "
    //               >
    //                 <div
    //                   style="
    //                     border-collapse: collapse;
    //                     display: table;
    //                     width: 100%;
    //                     height: 100%;
    //                     background-color: transparent;
    //                   "
    //                 >
    //                   <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 24px;background-color: #e7f3ff;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->

    //                   <!--[if (mso)|(IE)]><td align="center" width="500" style="background-color: #ffffff;width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
    //                   <div
    //                     class="u-col u-col-100"
    //                     style="
    //                       max-width: 320px;
    //                       min-width: 500px;
    //                       display: table-cell;
    //                       vertical-align: top;
    //                     "
    //                   >
    //                     <div
    //                       style="
    //                         background-color: #ffffff;
    //                         height: 100%;
    //                         width: 100% !important;
    //                         border-radius: 10px;
    //                         -webkit-border-radius: 10px;
    //                         -moz-border-radius: 10px;
    //                         box-shadow: 0 0 18px rgba(0, 0, 0, 0.1);
    //                       "
    //                     >
    //                       <!--[if (!mso)&(!IE)]><!-->
    //                       <div
    //                         style="
    //                           box-sizing: border-box;
    //                           height: 100%;
    //                           padding: 0px;
    //                           border-top: 0px solid transparent;
    //                           border-left: 0px solid transparent;
    //                           border-right: 0px solid transparent;
    //                           border-bottom: 0px solid transparent;
    //                           border-radius: 0px;
    //                           -webkit-border-radius: 0px;
    //                           -moz-border-radius: 0px;
    //                         "
    //                       >
    //                         <!--<![endif]-->

    //                         <table
    //                           id="u_content_heading_1"
    //                           style="font-family: arial, helvetica, sans-serif"
    //                           role="presentation"
    //                           cellpadding="0"
    //                           cellspacing="0"
    //                           width="100%"
    //                           border="0"
    //                         >
    //                           <tbody>
    //                             <tr>
    //                               <td
    //                                 class="v-container-padding-padding"
    //                                 style="
    //                                   overflow-wrap: break-word;
    //                                   word-break: break-word;
    //                                   padding: 32px 32px 16px;
    //                                   font-family: arial, helvetica, sans-serif;
    //                                 "
    //                                 align="left"
    //                               >
    //                                 <h1
    //                                   class="v-font-size"
    //                                   style="
    //                                     margin: 0px;
    //                                     line-height: 140%;
    //                                     text-align: left;
    //                                     word-wrap: break-word;
    //                                     font-size: 20px;
    //                                     font-weight: 700;
    //                                   "
    //                                 >
    //                                   <span
    //                                     >Welcome come to feedbacksync!</span
    //                                   >
    //                                 </h1>
    //                               </td>
    //                             </tr>
    //                           </tbody>
    //                         </table>

    //                         <table
    //                           id="u_content_text_1"
    //                           style="font-family: arial, helvetica, sans-serif"
    //                           role="presentation"
    //                           cellpadding="0"
    //                           cellspacing="0"
    //                           width="100%"
    //                           border="0"
    //                         >
    //                           <tbody>
    //                             <tr>
    //                               <td
    //                                 class="v-container-padding-padding"
    //                                 style="
    //                                   overflow-wrap: break-word;
    //                                   word-break: break-word;
    //                                   padding: 0px 32px 24px;
    //                                   font-family: arial, helvetica, sans-serif;
    //                                 "
    //                                 align="left"
    //                               >
    //                                 <div
    //                                   class="v-font-size"
    //                                   style="
    //                                     font-size: 16px;
    //                                     line-height: 140%;
    //                                     text-align: left;
    //                                     word-wrap: break-word;
    //                                   "
    //                                 >
    //                                   <p style="line-height: 140%">
    //                                     <span style="line-height: 22.4px"
    //                                       >Hi ${name},<br /><br />Hope you're doing well! <br /><br />
    //                                       <div align="left">
    //                                       <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://app.feedbacksync.com/" style="height:37px; v-text-anchor:middle; width:157px;" arcsize="13.5%"  stroke="f" fillcolor="#4f46e5"><w:anchorlock/><center style="color:#FFFFFF;"><![endif]-->
    //                                       <a
    //                                         href="https://app.feedbacksync.com/"
    //                                         target="_blank"
    //                                         class="v-button v-size-width v-font-size"
    //                                         style="
    //                                           box-sizing: border-box;
    //                                           display: inline-block;
    //                                           text-decoration: none;
    //                                           -webkit-text-size-adjust: none;
    //                                           text-align: center;
    //                                           color: #ffffff;
    //                                           background-color: #4f46e5;
    //                                           border-radius: 5px;
    //                                           -webkit-border-radius: 5px;
    //                                           -moz-border-radius: 5px;
    //                                           width: 36%;
    //                                           max-width: 100%;
    //                                           overflow-wrap: break-word;
    //                                           word-break: break-word;
    //                                           word-wrap: break-word;
    //                                           mso-border-alt: none;
    //                                           font-size: 14px;
    //                                         "
    //                                       >
    //                                         <span
    //                                           style="
    //                                             display: block;
    //                                             padding: 10px 20px;
    //                                             line-height: 120%;
    //                                           "
    //                                           ><span style="line-height: 16.8px"
    //                                             >Log in</span
    //                                           ></span
    //                                         >
    //                                       </a>
    //                                       <!--[if mso]></center></v:roundrect><![endif]-->
    //                                     </div><br /><br />Once logged in, you can create, distribute, and analyze surveys.<br /><br />Let me know if you need any help.
    //                                       <br /><br />Best regards,<br />${company_name}</span
    //                                     >
    //                                   </p>
    //                                 </div>
    //                               </td>
    //                             </tr>
    //                           </tbody>
    //                         </table>

    //                         <!--[if (!mso)&(!IE)]><!-->
    //                       </div>
    //                       <!--<![endif]-->
    //                     </div>
    //                   </div>
    //                   <!--[if (mso)|(IE)]></td><![endif]-->
    //                   <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    //                 </div>
    //               </div>
    //             </div>

    //             <div
    //               class="u-row-container v-row-padding--vertical"
    //               style="
    //                 padding: 0px;
    //                 background-color: transparent;
    //                 margin-top: 24px;
    //               "
    //             >
    //               <div
    //                 class="u-row no-stack"
    //                 style="
    //                   margin: 0 auto;
    //                   min-width: 320px;
    //                   max-width: 500px;
    //                   overflow-wrap: break-word;
    //                   word-wrap: break-word;
    //                   word-break: break-word;
    //                   background-color: transparent;
    //                 "
    //               >
    //                 <div
    //                   style="
    //                     border-collapse: collapse;
    //                     display: table;
    //                     width: 100%;
    //                     height: 100%;
    //                     background-color: transparent;
    //                   "
    //                 >
    //                   <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->

    //                   <!--[if (mso)|(IE)]><td align="center" width="166" style="width: 166px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
    //                   <div
    //                     class="u-col u-col-33p33"
    //                     style="
    //                       max-width: 320px;
    //                       min-width: 166.67px;
    //                       display: table-cell;
    //                       vertical-align: top;
    //                     "
    //                   >
    //                     <div
    //                       style="
    //                         height: 100%;
    //                         width: 100% !important;
    //                         border-radius: 0px;
    //                         -webkit-border-radius: 0px;
    //                         -moz-border-radius: 0px;
    //                       "
    //                     >
    //                       <!--[if (!mso)&(!IE)]><!-->
    //                       <div
    //                         style="
    //                           box-sizing: border-box;
    //                           height: 100%;
    //                           padding: 0px;
    //                           border-top: 0px solid transparent;
    //                           border-left: 0px solid transparent;
    //                           border-right: 0px solid transparent;
    //                           border-bottom: 0px solid transparent;
    //                           border-radius: 0px;
    //                           -webkit-border-radius: 0px;
    //                           -moz-border-radius: 0px;
    //                         "
    //                       >
    //                         <!--<![endif]-->

    //                         <table
    //                           id="u_content_image_2"
    //                           style="font-family: arial, helvetica, sans-serif"
    //                           role="presentation"
    //                           cellpadding="0"
    //                           cellspacing="0"
    //                           width="100%"
    //                           border="0"
    //                         >
    //                           <tbody>
    //                             <tr>
    //                               <td
    //                                 class="v-container-padding-padding"
    //                                 style="
    //                                   overflow-wrap: break-word;
    //                                   word-break: break-word;
    //                                   padding: 10px;
    //                                   font-family: arial, helvetica, sans-serif;
    //                                 "
    //                                 align="left"
    //                               >
    //                                 <table
    //                                   width="100%"
    //                                   cellpadding="0"
    //                                   cellspacing="0"
    //                                   border="0"
    //                                 >
    //                                   <tr>
    //                                     <td
    //                                       style="
    //                                         padding-right: 0px;
    //                                         padding-left: 0px;
    //                                       "
    //                                       align="right"
    //                                     >
    //                                       <a
    //                                         href="https://twitter.com/feedbacksync"
    //                                         target="_blank"
    //                                       >
    //                                         <img
    //                                           align="right"
    //                                           border="0"
    //                                           src="https://feedbackuploadimage.s3.ap-south-1.amazonaws.com/X+svg.png"
    //                                           alt=""
    //                                           title=""
    //                                           style="
    //                                             outline: none;
    //                                             text-decoration: none;
    //                                             -ms-interpolation-mode: bicubic;
    //                                             clear: both;
    //                                             display: inline-block !important;
    //                                             border: none;
    //                                             height: auto;
    //                                             float: none;
    //                                             width: 16%;
    //                                             max-width: 23.47px;
    //                                           "
    //                                           width="23.47"
    //                                           class="v-src-width v-src-max-width"
    //                                         />
    //                                       </a>
    //                                     </td>
    //                                   </tr>
    //                                 </table>
    //                               </td>
    //                             </tr>
    //                           </tbody>
    //                         </table>

    //                         <!--[if (!mso)&(!IE)]><!-->
    //                       </div>
    //                       <!--<![endif]-->
    //                     </div>
    //                   </div>
    //                   <!--[if (mso)|(IE)]></td><![endif]-->
    //                   <!--[if (mso)|(IE)]><td align="center" width="166" style="width: 166px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
    //                   <div
    //                     class="u-col u-col-33p33"
    //                     style="
    //                       max-width: 320px;
    //                       min-width: 166.67px;
    //                       display: table-cell;
    //                       vertical-align: top;
    //                     "
    //                   >
    //                     <div
    //                       style="
    //                         height: 100%;
    //                         width: 100% !important;
    //                         border-radius: 0px;
    //                         -webkit-border-radius: 0px;
    //                         -moz-border-radius: 0px;
    //                       "
    //                     >
    //                       <!--[if (!mso)&(!IE)]><!-->
    //                       <div
    //                         style="
    //                           box-sizing: border-box;
    //                           height: 100%;
    //                           padding: 0px;
    //                           border-top: 0px solid transparent;
    //                           border-left: 0px solid transparent;
    //                           border-right: 0px solid transparent;
    //                           border-bottom: 0px solid transparent;
    //                           border-radius: 0px;
    //                           -webkit-border-radius: 0px;
    //                           -moz-border-radius: 0px;
    //                         "
    //                       >
    //                         <!--<![endif]-->

    //                         <table
    //                           id="u_content_image_3"
    //                           style="font-family: arial, helvetica, sans-serif"
    //                           role="presentation"
    //                           cellpadding="0"
    //                           cellspacing="0"
    //                           width="100%"
    //                           border="0"
    //                         >
    //                           <tbody>
    //                             <tr>
    //                               <td
    //                                 class="v-container-padding-padding"
    //                                 style="
    //                                   overflow-wrap: break-word;
    //                                   word-break: break-word;
    //                                   padding: 10px;
    //                                   font-family: arial, helvetica, sans-serif;
    //                                 "
    //                                 align="left"
    //                               >
    //                                 <table
    //                                   width="100%"
    //                                   cellpadding="0"
    //                                   cellspacing="0"
    //                                   border="0"
    //                                 >
    //                                   <tr>
    //                                     <td
    //                                       style="
    //                                         padding-right: 0px;
    //                                         padding-left: 0px;
    //                                       "
    //                                       align="center"
    //                                     >
    //                                       <a
    //                                         href="https://www.facebook.com/feedbacksync"
    //                                         target="_blank"
    //                                       >
    //                                         <img
    //                                           align="center"
    //                                           border="0"
    //                                           src="https://feedbackuploadimage.s3.ap-south-1.amazonaws.com/facebook.png"
    //                                           alt=""
    //                                           title=""
    //                                           style="
    //                                             outline: none;
    //                                             text-decoration: none;
    //                                             -ms-interpolation-mode: bicubic;
    //                                             clear: both;
    //                                             display: inline-block !important;
    //                                             border: none;
    //                                             height: auto;
    //                                             float: none;
    //                                             width: 16%;
    //                                             max-width: 23.47px;
    //                                           "
    //                                           width="23.47"
    //                                           class="v-src-width v-src-max-width"
    //                                         />
    //                                       </a>
    //                                     </td>
    //                                   </tr>
    //                                 </table>
    //                               </td>
    //                             </tr>
    //                           </tbody>
    //                         </table>

    //                         <!--[if (!mso)&(!IE)]><!-->
    //                       </div>
    //                       <!--<![endif]-->
    //                     </div>
    //                   </div>
    //                   <!--[if (mso)|(IE)]></td><![endif]-->
    //                   <!--[if (mso)|(IE)]><td align="center" width="166" style="width: 166px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
    //                   <div
    //                     class="u-col u-col-33p33"
    //                     style="
    //                       max-width: 320px;
    //                       min-width: 166.67px;
    //                       display: table-cell;
    //                       vertical-align: top;
    //                     "
    //                   >
    //                     <div
    //                       style="
    //                         height: 100%;
    //                         width: 100% !important;
    //                         border-radius: 0px;
    //                         -webkit-border-radius: 0px;
    //                         -moz-border-radius: 0px;
    //                       "
    //                     >
    //                       <!--[if (!mso)&(!IE)]><!-->
    //                       <div
    //                         style="
    //                           box-sizing: border-box;
    //                           height: 100%;
    //                           padding: 0px;
    //                           border-top: 0px solid transparent;
    //                           border-left: 0px solid transparent;
    //                           border-right: 0px solid transparent;
    //                           border-bottom: 0px solid transparent;
    //                           border-radius: 0px;
    //                           -webkit-border-radius: 0px;
    //                           -moz-border-radius: 0px;
    //                         "
    //                       >
    //                         <!--<![endif]-->

    //                         <table
    //                           id="u_content_image_4"
    //                           style="font-family: arial, helvetica, sans-serif"
    //                           role="presentation"
    //                           cellpadding="0"
    //                           cellspacing="0"
    //                           width="100%"
    //                           border="0"
    //                         >
    //                           <tbody>
    //                             <tr>
    //                               <td
    //                                 class="v-container-padding-padding"
    //                                 style="
    //                                   overflow-wrap: break-word;
    //                                   word-break: break-word;
    //                                   padding: 10px;
    //                                   font-family: arial, helvetica, sans-serif;
    //                                 "
    //                                 align="left"
    //                               >
    //                                 <table
    //                                   width="100%"
    //                                   cellpadding="0"
    //                                   cellspacing="0"
    //                                   border="0"
    //                                 >
    //                                   <tr>
    //                                     <td
    //                                       style="
    //                                         padding-right: 0px;
    //                                         padding-left: 0px;
    //                                       "
    //                                       align="left"
    //                                     >
    //                                       <a
    //                                         href="https://www.instagram.com/feedbacksync"
    //                                         target="_blank"
    //                                       >
    //                                         <img
    //                                           align="left"
    //                                           border="0"
    //                                           src="https://feedbackuploadimage.s3.ap-south-1.amazonaws.com/instagram.png"
    //                                           alt=""
    //                                           title=""
    //                                           style="
    //                                             outline: none;
    //                                             text-decoration: none;
    //                                             -ms-interpolation-mode: bicubic;
    //                                             clear: both;
    //                                             display: inline-block !important;
    //                                             border: none;
    //                                             height: auto;
    //                                             float: none;
    //                                             width: 16%;
    //                                             max-width: 23.47px;
    //                                           "
    //                                           width="23.47"
    //                                           class="v-src-width v-src-max-width"
    //                                         />
    //                                       </a>
    //                                     </td>
    //                                   </tr>
    //                                 </table>
    //                               </td>
    //                             </tr>
    //                           </tbody>
    //                         </table>

    //                         <!--[if (!mso)&(!IE)]><!-->
    //                       </div>
    //                       <!--<![endif]-->
    //                     </div>
    //                   </div>
    //                   <!--[if (mso)|(IE)]></td><![endif]-->
    //                   <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    //                 </div>
    //               </div>
    //             </div>

    //             <div
    //               class="u-row-container v-row-padding--vertical"
    //               style="
    //                 padding: 0px;
    //                 background-color: #e8e8e8;
    //                 border-bottom: 12px solid #4f46e5;
    //               "
    //             >
    //               <div
    //                 class="u-row"
    //                 style="
    //                   margin: 0 auto;
    //                   min-width: 320px;
    //                   max-width: 500px;
    //                   overflow-wrap: break-word;
    //                   word-wrap: break-word;
    //                   word-break: break-word;
    //                   background-color: transparent;
    //                 "
    //               >
    //                 <div
    //                   style="
    //                     border-collapse: collapse;
    //                     display: table;
    //                     width: 100%;
    //                     height: 100%;
    //                     background-color: transparent;
    //                   "
    //                 >
    //                   <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #e8e8e8;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->

    //                   <!--[if (mso)|(IE)]><td align="center" width="500" style="width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
    //                   <div
    //                     class="u-col u-col-100"
    //                     style="
    //                       max-width: 320px;
    //                       min-width: 500px;
    //                       display: table-cell;
    //                       vertical-align: top;
    //                     "
    //                   >
    //                     <div
    //                       style="
    //                         height: 100%;
    //                         width: 100% !important;
    //                         border-radius: 0px;
    //                         -webkit-border-radius: 0px;
    //                         -moz-border-radius: 0px;
    //                       "
    //                     >
    //                       <!--[if (!mso)&(!IE)]><!-->
    //                       <div
    //                         style="
    //                           box-sizing: border-box;
    //                           height: 100%;
    //                           padding: 0px;
    //                           border-top: 0px solid transparent;
    //                           border-left: 0px solid transparent;
    //                           border-right: 0px solid transparent;
    //                           border-bottom: 0px solid transparent;
    //                           border-radius: 0px;
    //                           -webkit-border-radius: 0px;
    //                           -moz-border-radius: 0px;
    //                         "
    //                       >
    //                         <!--<![endif]-->

    //                         <table
    //                           style="font-family: arial, helvetica, sans-serif"
    //                           role="presentation"
    //                           cellpadding="0"
    //                           cellspacing="0"
    //                           width="100%"
    //                           border="0"
    //                         >
    //                           <tbody>
    //                             <tr>
    //                               <td
    //                                 class="v-container-padding-padding"
    //                                 style="
    //                                   overflow-wrap: break-word;
    //                                   word-break: break-word;
    //                                   padding: 16px 16px 8px;
    //                                   font-family: arial, helvetica, sans-serif;
    //                                 "
    //                                 align="left"
    //                               >
    //                                 <h2
    //                                   class="v-font-size"
    //                                   style="
    //                                     margin: 0px;
    //                                     line-height: 140%;
    //                                     text-align: center;
    //                                     word-wrap: break-word;
    //                                     font-size: 16px;
    //                                     font-weight: 400;
    //                                   "
    //                                 >
    //                                   <a
    //                                     href="https://www.feedbacksync.com"
    //                                     target="_blank"
    //                                   >
    //                                     <span>www.feedbacksync.com</span>
    //                                   </a>
    //                                 </h2>
    //                               </td>
    //                             </tr>
    //                           </tbody>
    //                         </table>

    //                         <table
    //                           style="font-family: arial, helvetica, sans-serif"
    //                           role="presentation"
    //                           cellpadding="0"
    //                           cellspacing="0"
    //                           width="100%"
    //                           border="0"
    //                         >
    //                           <tbody>
    //                             <tr>
    //                               <td
    //                                 class="v-container-padding-padding"
    //                                 style="
    //                                   overflow-wrap: break-word;
    //                                   word-break: break-word;
    //                                   padding: 0px 32px 14px;
    //                                   font-family: arial, helvetica, sans-serif;
    //                                 "
    //                                 align="left"
    //                               >
    //                               <div
    //                               class="v-font-size"
    //                               style="
    //                                 font-size: 14px;
    //                                 line-height: 140%;
    //                                 text-align: center;
    //                                 word-wrap: break-word;                                  
    //                               "
    //                             >
    //                               <p style="line-height: 140%;">
    //                                 <span style="line-height: 19.6px"
    //                                   ><span style="line-height: 19.6px">
    //                                     No 68, Mahadevan Street, Westmambalam,
    //                                     T. Nagar, Chennai, Tamil Nadu
    //                                     600018</span
    //                                   > </span
    //                                 >
    //                               </p>
    //                             </div>
    //                               </td>
    //                             </tr>
    //                           </tbody>
    //                         </table>

    //                         <table
    //                           style="font-family: arial, helvetica, sans-serif"
    //                           role="presentation"
    //                           cellpadding="0"
    //                           cellspacing="0"
    //                           width="100%"
    //                           border="0"
    //                         >
    //                           <tbody>
    //                             <tr>
    //                               <td
    //                                 class="v-container-padding-padding"
    //                                 style="
    //                                   overflow-wrap: break-word;
    //                                   word-break: break-word;
    //                                   padding: 10px;
    //                                   font-family: arial, helvetica, sans-serif;
    //                                 "
    //                                 align="left"
    //                               >
    //                                 <table
    //                                   width="100%"
    //                                   cellpadding="0"
    //                                   cellspacing="0"
    //                                   border="0"
    //                                 >
    //                                   <tr>
    //                                     <td
    //                                       style="
    //                                         padding-right: 0px;
    //                                         padding-left: 0px;
    //                                       "
    //                                       align="center"
    //                                     >
    //                                       <a
    //                                         href="https://www.feedbacksync.com"
    //                                         target="_blank"
    //                                       >
    //                                         <img
    //                                           align="center"
    //                                           border="0"
    //                                           src="https://feedbackuploadimage.s3.ap-south-1.amazonaws.com/FeedbackBrand.png"
    //                                           alt=""
    //                                           title=""
    //                                           style="
    //                                             outline: none;
    //                                             text-decoration: none;
    //                                             -ms-interpolation-mode: bicubic;
    //                                             clear: both;
    //                                             display: inline-block !important;
    //                                             border: none;
    //                                             height: auto;
    //                                             float: none;
    //                                             max-width: 240px;
    //                                             padding-bottom: 16px;
    //                                           "
    //                                           class="v-src-width v-src-max-width"
    //                                         />
    //                                       </a>
    //                                     </td>
    //                                   </tr>
    //                                 </table>
    //                               </td>
    //                             </tr>
    //                           </tbody>
    //                         </table>

    //                         <!--[if (!mso)&(!IE)]><!-->
    //                       </div>
    //                       <!--<![endif]-->
    //                     </div>
    //                   </div>
    //                   <!--[if (mso)|(IE)]></td><![endif]-->
    //                   <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    //                 </div>
    //               </div>
    //             </div>

    //             <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
    //           </td>
    //         </tr>
    //       </tbody>
    //     </table>
    //     <!--[if mso]></div><![endif]-->
    //     <!--[if IE]></div><![endif]-->
    //   </body>
    // </html>


    // `;
};

exports.responseContact = async ({name}) => {
    console.log(name)
    return ` Hi ${name}
    <br />
    <br />
    Thank you for contacting us we will connect soon as possible
    `
    // return `
    // <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    // <html
    //   xmlns="http://www.w3.org/1999/xhtml"
    //   xmlns:v="urn:schemas-microsoft-com:vml"
    //   xmlns:o="urn:schemas-microsoft-com:office:office"
    // >
    //   <head>
    //     <!--[if gte mso 9]>
    //       <xml>
    //         <o:OfficeDocumentSettings>
    //           <o:AllowPNG />
    //           <o:PixelsPerInch>96</o:PixelsPerInch>
    //         </o:OfficeDocumentSettings>
    //       </xml>
    //     <![endif]-->
    //     <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    //     <meta name="x-apple-disable-message-reformatting" />
    //     <!--[if !mso]><!-->
    //     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    //     <!--<![endif]-->
    //     <title></title>

    //     <style type="text/css">
    //       @media only screen and (min-width: 520px) {
    //         .u-row {
    //           width: 500px !important;
    //         }

    //         .u-row .u-col {
    //           vertical-align: top;
    //         }

    //         .u-row .u-col-33p33 {
    //           width: 166.65px !important;
    //         }

    //         .u-row .u-col-100 {
    //           width: 500px !important;
    //         }
    //       }

    //       @media (max-width: 520px) {
    //         .u-row-container {
    //           max-width: 100% !important;
    //           padding-left: 0px !important;
    //           padding-right: 0px !important;
    //         }

    //         .u-row .u-col {
    //           min-width: 320px !important;
    //           max-width: 100% !important;
    //           display: block !important;
    //         }

    //         .u-row {
    //           width: 100% !important;
    //         }

    //         .u-col {
    //           width: 100% !important;
    //         }

    //         .u-col > div {
    //           margin: 0 auto;
    //         }

    //         .no-stack .u-col {
    //           min-width: 0 !important;
    //           display: table-cell !important;
    //         }

    //         .no-stack .u-col-33p33 {
    //           width: 33.33% !important;
    //         }
    //       }

    //       body {
    //         margin: 0;
    //         padding: 0;
    //       }

    //       table,
    //       tr,
    //       td {
    //         vertical-align: top;
    //         border-collapse: collapse;
    //       }

    //       p {
    //         margin: 0;
    //       }

    //       .ie-container table,
    //       .mso-container table {
    //         table-layout: fixed;
    //       }

    //       * {
    //         line-height: inherit;
    //       }

    //       a[x-apple-data-detectors="true"] {
    //         color: inherit !important;
    //         text-decoration: none !important;
    //       }

    //       table,
    //       td {
    //         color: #000000;
    //       }

    //       #u_body a {
    //         color: #0000ee;
    //         text-decoration: underline;
    //       }

    //       @media (max-width: 480px) {
    //         #u_row_3.v-row-padding--vertical {
    //           padding-top: 16px !important;
    //           padding-bottom: 16px !important;
    //         }

    //         #u_content_heading_1 .v-container-padding-padding {
    //           padding: 32px 32px 16px !important;
    //         }

    //         #u_content_heading_1 .v-font-size {
    //           font-size: 17px !important;
    //         }

    //         #u_content_text_1 .v-container-padding-padding {
    //           padding: 0px 32px 24px !important;
    //         }

    //         #u_content_text_1 .v-font-size {
    //           font-size: 13px !important;
    //         }

    //         #u_content_button_1 .v-size-width {
    //           width: auto !important;
    //         }

    //         #u_content_image_2 .v-src-width {
    //           width: auto !important;
    //         }

    //         #u_content_image_2 .v-src-max-width {
    //           max-width: 25% !important;
    //         }

    //         #u_content_image_3 .v-src-width {
    //           width: auto !important;
    //         }

    //         #u_content_image_3 .v-src-max-width {
    //           max-width: 25% !important;
    //         }

    //         #u_content_image_4 .v-src-width {
    //           width: auto !important;
    //         }

    //         #u_content_image_4 .v-src-max-width {
    //           max-width: 25% !important;
    //         }
    //       }
    //     </style>
    //   </head>

    //   <body
    //     class="clean-body u_body"
    //     style="
    //       margin: 0;
    //       padding: 0;
    //       -webkit-text-size-adjust: 100%;
    //       background-color: #e7e7e7;
    //       color: #000000;
    //     "
    //   >
    //     <!--[if IE]><div class="ie-container"><![endif]-->
    //     <!--[if mso]><div class="mso-container"><![endif]-->
    //     <table
    //       id="u_body"
    //       style="
    //         border-collapse: collapse;
    //         table-layout: fixed;
    //         border-spacing: 0;
    //         mso-table-lspace: 0pt;
    //         mso-table-rspace: 0pt;
    //         vertical-align: top;
    //         min-width: 320px;
    //         margin: 0 auto;
    //         background-color: #e7e7e7;
    //         width: 100%;
    //       "
    //       cellpadding="0"
    //       cellspacing="0"
    //     >
    //       <tbody>
    //         <tr style="vertical-align: top">
    //           <td
    //             style="
    //               word-break: break-word;
    //               border-collapse: collapse !important;
    //               vertical-align: top;
    //             "
    //           >
    //             <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->

    //             <div
    //               class="u-row-container v-row-padding--vertical"
    //               style="padding: 0px; background-color: #e7f3ff"
    //             >
    //               <div
    //                 class="u-row"
    //                 style="
    //                   margin: 0 auto;
    //                   min-width: 320px;
    //                   max-width: 500px;
    //                   overflow-wrap: break-word;
    //                   word-wrap: break-word;
    //                   word-break: break-word;
    //                   background-color: transparent;
    //                 "
    //               >
    //                 <div
    //                   style="
    //                     border-collapse: collapse;
    //                     display: table;
    //                     width: 100%;
    //                     height: 100%;
    //                     background-color: transparent;
    //                   "
    //                 >
    //                   <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #e7f3ff;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->

    //                   <!--[if (mso)|(IE)]><td align="center" width="500" style="width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
    //                   <div
    //                     class="u-col u-col-100"
    //                     style="
    //                       max-width: 320px;
    //                       min-width: 500px;
    //                       display: table-cell;
    //                       vertical-align: top;
    //                     "
    //                   >
    //                     <div style="height: 100%; width: 100% !important">
    //                       <!--[if (!mso)&(!IE)]><!-->
    //                       <div
    //                         style="
    //                           box-sizing: border-box;
    //                           height: 100%;
    //                           padding: 0px;
    //                           border-top: 0px solid transparent;
    //                           border-left: 0px solid transparent;
    //                           border-right: 0px solid transparent;
    //                           border-bottom: 0px solid transparent;
    //                         "
    //                       >
    //                         <!--<![endif]-->

    //                         <table
    //                           style="font-family: arial, helvetica, sans-serif"
    //                           role="presentation"
    //                           cellpadding="0"
    //                           cellspacing="0"
    //                           width="100%"
    //                           border="0"
    //                         >
    //                           <tbody>
    //                             <tr>
    //                               <td
    //                                 class="v-container-padding-padding"
    //                                 style="
    //                                   overflow-wrap: break-word;
    //                                   word-break: break-word;
    //                                   padding: 10px;
    //                                   font-family: arial, helvetica, sans-serif;
    //                                 "
    //                                 align="left"
    //                               >
    //                                 <table
    //                                   width="100%"
    //                                   cellpadding="0"
    //                                   cellspacing="0"
    //                                   border="0"
    //                                 >
    //                                   <tr>
    //                                     <td
    //                                       style="
    //                                         padding-right: 0px;
    //                                         padding-left: 0px;
    //                                       "
    //                                       align="center"
    //                                     >
    //                                       <img
    //                                         align="center"
    //                                         border="0"
    //                                         src="https://peacockimages.s3.ap-south-1.amazonaws.com/Logo.svg"
    //                                         alt=""
    //                                         title=""
    //                                         style="
    //                                           outline: none;
    //                                           text-decoration: none;
    //                                           -ms-interpolation-mode: bicubic;
    //                                           clear: both;
    //                                           display: inline-block !important;
    //                                           border: none;
    //                                           height: auto;
    //                                           float: none;
    //                                           width: 50%;
    //                                           max-width: 240px;
    //                                         "
    //                                         width="240"
    //                                         class="v-src-width v-src-max-width"
    //                                       />
    //                                     </td>
    //                                   </tr>
    //                                 </table>
    //                               </td>
    //                             </tr>
    //                           </tbody>
    //                         </table>

    //                         <!--[if (!mso)&(!IE)]><!-->
    //                       </div>
    //                       <!--<![endif]-->
    //                     </div>
    //                   </div>
    //                   <!--[if (mso)|(IE)]></td><![endif]-->
    //                   <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    //                 </div>
    //               </div>
    //             </div>

    //             <div
    //               id="u_row_3"
    //               class="u-row-container v-row-padding--vertical"
    //               style="padding: 24px; background-color: #e7f3ff"
    //             >
    //               <div
    //                 class="u-row"
    //                 style="
    //                   margin: 0 auto;
    //                   min-width: 320px;
    //                   max-width: 500px;
    //                   overflow-wrap: break-word;
    //                   word-wrap: break-word;
    //                   word-break: break-word;
    //                   background-color: transparent;
    //                 "
    //               >
    //                 <div
    //                   style="
    //                     border-collapse: collapse;
    //                     display: table;
    //                     width: 100%;
    //                     height: 100%;
    //                     background-color: transparent;
    //                   "
    //                 >
    //                   <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 24px;background-color: #e7f3ff;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->

    //                   <!--[if (mso)|(IE)]><td align="center" width="500" style="background-color: #ffffff;width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
    //                   <div
    //                     class="u-col u-col-100"
    //                     style="
    //                       max-width: 320px;
    //                       min-width: 500px;
    //                       display: table-cell;
    //                       vertical-align: top;
    //                     "
    //                   >
    //                     <div
    //                       style="
    //                         background-color: #ffffff;
    //                         height: 100%;
    //                         width: 100% !important;
    //                         border-radius: 10px;
    //                         -webkit-border-radius: 10px;
    //                         -moz-border-radius: 10px;
    //                         box-shadow: 0 0 18px rgba(0, 0, 0, 0.1);
    //                       "
    //                     >
    //                       <!--[if (!mso)&(!IE)]><!-->
    //                       <div
    //                         style="
    //                           box-sizing: border-box;
    //                           height: 100%;
    //                           padding: 0px;
    //                           border-top: 0px solid transparent;
    //                           border-left: 0px solid transparent;
    //                           border-right: 0px solid transparent;
    //                           border-bottom: 0px solid transparent;
    //                           border-radius: 0px;
    //                           -webkit-border-radius: 0px;
    //                           -moz-border-radius: 0px;
    //                         "
    //                       >
    //                         <!--<![endif]-->

    //                         <table
    //                           id="u_content_heading_1"
    //                           style="font-family: arial, helvetica, sans-serif"
    //                           role="presentation"
    //                           cellpadding="0"
    //                           cellspacing="0"
    //                           width="100%"
    //                           border="0"
    //                         >
    //                           <tbody>
    //                             <tr>
    //                               <td
    //                                 class="v-container-padding-padding"
    //                                 style="
    //                                   overflow-wrap: break-word;
    //                                   word-break: break-word;
    //                                   padding: 32px 32px 16px;
    //                                   font-family: arial, helvetica, sans-serif;
    //                                 "
    //                                 align="left"
    //                               >
    //                                 <h1
    //                                   class="v-font-size"
    //                                   style="
    //                                     margin: 0px;
    //                                     line-height: 140%;
    //                                     text-align: left;
    //                                     word-wrap: break-word;
    //                                     font-size: 20px;
    //                                     font-weight: 700;
    //                                   "
    //                                 >
    //                                   <span
    //                                     >Welcome come to feedbacksync!</span
    //                                   >
    //                                 </h1>
    //                               </td>
    //                             </tr>
    //                           </tbody>
    //                         </table>

    //                         <table
    //                           id="u_content_text_1"
    //                           style="font-family: arial, helvetica, sans-serif"
    //                           role="presentation"
    //                           cellpadding="0"
    //                           cellspacing="0"
    //                           width="100%"
    //                           border="0"
    //                         >
    //                           <tbody>
    //                             <tr>
    //                               <td
    //                                 class="v-container-padding-padding"
    //                                 style="
    //                                   overflow-wrap: break-word;
    //                                   word-break: break-word;
    //                                   padding: 0px 32px 24px;
    //                                   font-family: arial, helvetica, sans-serif;
    //                                 "
    //                                 align="left"
    //                               >
    //                                 <div
    //                                   class="v-font-size"
    //                                   style="
    //                                     font-size: 16px;
    //                                     line-height: 140%;
    //                                     text-align: left;
    //                                     word-wrap: break-word;
    //                                   "
    //                                 >
    //                                   <p style="line-height: 140%">
    //                                     <span style="line-height: 22.4px"
    //                                       >Hi ${name},<br /><br />Hope you're doing well! <br /><br />
    //                                       <div align="left">
    //                                       <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://app.feedbacksync.com/" style="height:37px; v-text-anchor:middle; width:157px;" arcsize="13.5%"  stroke="f" fillcolor="#4f46e5"><w:anchorlock/><center style="color:#FFFFFF;"><![endif]-->
    //                                       <a
    //                                         href="https://app.feedbacksync.com/"
    //                                         target="_blank"
    //                                         class="v-button v-size-width v-font-size"
    //                                         style="
    //                                           box-sizing: border-box;
    //                                           display: inline-block;
    //                                           text-decoration: none;
    //                                           -webkit-text-size-adjust: none;
    //                                           text-align: center;
    //                                           color: #ffffff;
    //                                           background-color: #4f46e5;
    //                                           border-radius: 5px;
    //                                           -webkit-border-radius: 5px;
    //                                           -moz-border-radius: 5px;
    //                                           width: 36%;
    //                                           max-width: 100%;
    //                                           overflow-wrap: break-word;
    //                                           word-break: break-word;
    //                                           word-wrap: break-word;
    //                                           mso-border-alt: none;
    //                                           font-size: 14px;
    //                                         "
    //                                       >
    //                                         <span
    //                                           style="
    //                                             display: block;
    //                                             padding: 10px 20px;
    //                                             line-height: 120%;
    //                                           "
    //                                           ><span style="line-height: 16.8px"
    //                                             >Log in</span
    //                                           ></span
    //                                         >
    //                                       </a>
    //                                       <!--[if mso]></center></v:roundrect><![endif]-->
    //                                     </div><br /><br />Once logged in, you can create, distribute, and analyze surveys.<br /><br />Let me know if you need any help.
    //                                       <br /><br />Best regards,<br />${company_name}</span
    //                                     >
    //                                   </p>
    //                                 </div>
    //                               </td>
    //                             </tr>
    //                           </tbody>
    //                         </table>

    //                         <!--[if (!mso)&(!IE)]><!-->
    //                       </div>
    //                       <!--<![endif]-->
    //                     </div>
    //                   </div>
    //                   <!--[if (mso)|(IE)]></td><![endif]-->
    //                   <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    //                 </div>
    //               </div>
    //             </div>

    //             <div
    //               class="u-row-container v-row-padding--vertical"
    //               style="
    //                 padding: 0px;
    //                 background-color: transparent;
    //                 margin-top: 24px;
    //               "
    //             >
    //               <div
    //                 class="u-row no-stack"
    //                 style="
    //                   margin: 0 auto;
    //                   min-width: 320px;
    //                   max-width: 500px;
    //                   overflow-wrap: break-word;
    //                   word-wrap: break-word;
    //                   word-break: break-word;
    //                   background-color: transparent;
    //                 "
    //               >
    //                 <div
    //                   style="
    //                     border-collapse: collapse;
    //                     display: table;
    //                     width: 100%;
    //                     height: 100%;
    //                     background-color: transparent;
    //                   "
    //                 >
    //                   <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->

    //                   <!--[if (mso)|(IE)]><td align="center" width="166" style="width: 166px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
    //                   <div
    //                     class="u-col u-col-33p33"
    //                     style="
    //                       max-width: 320px;
    //                       min-width: 166.67px;
    //                       display: table-cell;
    //                       vertical-align: top;
    //                     "
    //                   >
    //                     <div
    //                       style="
    //                         height: 100%;
    //                         width: 100% !important;
    //                         border-radius: 0px;
    //                         -webkit-border-radius: 0px;
    //                         -moz-border-radius: 0px;
    //                       "
    //                     >
    //                       <!--[if (!mso)&(!IE)]><!-->
    //                       <div
    //                         style="
    //                           box-sizing: border-box;
    //                           height: 100%;
    //                           padding: 0px;
    //                           border-top: 0px solid transparent;
    //                           border-left: 0px solid transparent;
    //                           border-right: 0px solid transparent;
    //                           border-bottom: 0px solid transparent;
    //                           border-radius: 0px;
    //                           -webkit-border-radius: 0px;
    //                           -moz-border-radius: 0px;
    //                         "
    //                       >
    //                         <!--<![endif]-->

    //                         <table
    //                           id="u_content_image_2"
    //                           style="font-family: arial, helvetica, sans-serif"
    //                           role="presentation"
    //                           cellpadding="0"
    //                           cellspacing="0"
    //                           width="100%"
    //                           border="0"
    //                         >
    //                           <tbody>
    //                             <tr>
    //                               <td
    //                                 class="v-container-padding-padding"
    //                                 style="
    //                                   overflow-wrap: break-word;
    //                                   word-break: break-word;
    //                                   padding: 10px;
    //                                   font-family: arial, helvetica, sans-serif;
    //                                 "
    //                                 align="left"
    //                               >
    //                                 <table
    //                                   width="100%"
    //                                   cellpadding="0"
    //                                   cellspacing="0"
    //                                   border="0"
    //                                 >
    //                                   <tr>
    //                                     <td
    //                                       style="
    //                                         padding-right: 0px;
    //                                         padding-left: 0px;
    //                                       "
    //                                       align="right"
    //                                     >
    //                                       <a
    //                                         href="https://twitter.com/feedbacksync"
    //                                         target="_blank"
    //                                       >
    //                                         <img
    //                                           align="right"
    //                                           border="0"
    //                                           src="https://feedbackuploadimage.s3.ap-south-1.amazonaws.com/X+svg.png"
    //                                           alt=""
    //                                           title=""
    //                                           style="
    //                                             outline: none;
    //                                             text-decoration: none;
    //                                             -ms-interpolation-mode: bicubic;
    //                                             clear: both;
    //                                             display: inline-block !important;
    //                                             border: none;
    //                                             height: auto;
    //                                             float: none;
    //                                             width: 16%;
    //                                             max-width: 23.47px;
    //                                           "
    //                                           width="23.47"
    //                                           class="v-src-width v-src-max-width"
    //                                         />
    //                                       </a>
    //                                     </td>
    //                                   </tr>
    //                                 </table>
    //                               </td>
    //                             </tr>
    //                           </tbody>
    //                         </table>

    //                         <!--[if (!mso)&(!IE)]><!-->
    //                       </div>
    //                       <!--<![endif]-->
    //                     </div>
    //                   </div>
    //                   <!--[if (mso)|(IE)]></td><![endif]-->
    //                   <!--[if (mso)|(IE)]><td align="center" width="166" style="width: 166px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
    //                   <div
    //                     class="u-col u-col-33p33"
    //                     style="
    //                       max-width: 320px;
    //                       min-width: 166.67px;
    //                       display: table-cell;
    //                       vertical-align: top;
    //                     "
    //                   >
    //                     <div
    //                       style="
    //                         height: 100%;
    //                         width: 100% !important;
    //                         border-radius: 0px;
    //                         -webkit-border-radius: 0px;
    //                         -moz-border-radius: 0px;
    //                       "
    //                     >
    //                       <!--[if (!mso)&(!IE)]><!-->
    //                       <div
    //                         style="
    //                           box-sizing: border-box;
    //                           height: 100%;
    //                           padding: 0px;
    //                           border-top: 0px solid transparent;
    //                           border-left: 0px solid transparent;
    //                           border-right: 0px solid transparent;
    //                           border-bottom: 0px solid transparent;
    //                           border-radius: 0px;
    //                           -webkit-border-radius: 0px;
    //                           -moz-border-radius: 0px;
    //                         "
    //                       >
    //                         <!--<![endif]-->

    //                         <table
    //                           id="u_content_image_3"
    //                           style="font-family: arial, helvetica, sans-serif"
    //                           role="presentation"
    //                           cellpadding="0"
    //                           cellspacing="0"
    //                           width="100%"
    //                           border="0"
    //                         >
    //                           <tbody>
    //                             <tr>
    //                               <td
    //                                 class="v-container-padding-padding"
    //                                 style="
    //                                   overflow-wrap: break-word;
    //                                   word-break: break-word;
    //                                   padding: 10px;
    //                                   font-family: arial, helvetica, sans-serif;
    //                                 "
    //                                 align="left"
    //                               >
    //                                 <table
    //                                   width="100%"
    //                                   cellpadding="0"
    //                                   cellspacing="0"
    //                                   border="0"
    //                                 >
    //                                   <tr>
    //                                     <td
    //                                       style="
    //                                         padding-right: 0px;
    //                                         padding-left: 0px;
    //                                       "
    //                                       align="center"
    //                                     >
    //                                       <a
    //                                         href="https://www.facebook.com/feedbacksync"
    //                                         target="_blank"
    //                                       >
    //                                         <img
    //                                           align="center"
    //                                           border="0"
    //                                           src="https://feedbackuploadimage.s3.ap-south-1.amazonaws.com/facebook.png"
    //                                           alt=""
    //                                           title=""
    //                                           style="
    //                                             outline: none;
    //                                             text-decoration: none;
    //                                             -ms-interpolation-mode: bicubic;
    //                                             clear: both;
    //                                             display: inline-block !important;
    //                                             border: none;
    //                                             height: auto;
    //                                             float: none;
    //                                             width: 16%;
    //                                             max-width: 23.47px;
    //                                           "
    //                                           width="23.47"
    //                                           class="v-src-width v-src-max-width"
    //                                         />
    //                                       </a>
    //                                     </td>
    //                                   </tr>
    //                                 </table>
    //                               </td>
    //                             </tr>
    //                           </tbody>
    //                         </table>

    //                         <!--[if (!mso)&(!IE)]><!-->
    //                       </div>
    //                       <!--<![endif]-->
    //                     </div>
    //                   </div>
    //                   <!--[if (mso)|(IE)]></td><![endif]-->
    //                   <!--[if (mso)|(IE)]><td align="center" width="166" style="width: 166px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
    //                   <div
    //                     class="u-col u-col-33p33"
    //                     style="
    //                       max-width: 320px;
    //                       min-width: 166.67px;
    //                       display: table-cell;
    //                       vertical-align: top;
    //                     "
    //                   >
    //                     <div
    //                       style="
    //                         height: 100%;
    //                         width: 100% !important;
    //                         border-radius: 0px;
    //                         -webkit-border-radius: 0px;
    //                         -moz-border-radius: 0px;
    //                       "
    //                     >
    //                       <!--[if (!mso)&(!IE)]><!-->
    //                       <div
    //                         style="
    //                           box-sizing: border-box;
    //                           height: 100%;
    //                           padding: 0px;
    //                           border-top: 0px solid transparent;
    //                           border-left: 0px solid transparent;
    //                           border-right: 0px solid transparent;
    //                           border-bottom: 0px solid transparent;
    //                           border-radius: 0px;
    //                           -webkit-border-radius: 0px;
    //                           -moz-border-radius: 0px;
    //                         "
    //                       >
    //                         <!--<![endif]-->

    //                         <table
    //                           id="u_content_image_4"
    //                           style="font-family: arial, helvetica, sans-serif"
    //                           role="presentation"
    //                           cellpadding="0"
    //                           cellspacing="0"
    //                           width="100%"
    //                           border="0"
    //                         >
    //                           <tbody>
    //                             <tr>
    //                               <td
    //                                 class="v-container-padding-padding"
    //                                 style="
    //                                   overflow-wrap: break-word;
    //                                   word-break: break-word;
    //                                   padding: 10px;
    //                                   font-family: arial, helvetica, sans-serif;
    //                                 "
    //                                 align="left"
    //                               >
    //                                 <table
    //                                   width="100%"
    //                                   cellpadding="0"
    //                                   cellspacing="0"
    //                                   border="0"
    //                                 >
    //                                   <tr>
    //                                     <td
    //                                       style="
    //                                         padding-right: 0px;
    //                                         padding-left: 0px;
    //                                       "
    //                                       align="left"
    //                                     >
    //                                       <a
    //                                         href="https://www.instagram.com/feedbacksync"
    //                                         target="_blank"
    //                                       >
    //                                         <img
    //                                           align="left"
    //                                           border="0"
    //                                           src="https://feedbackuploadimage.s3.ap-south-1.amazonaws.com/instagram.png"
    //                                           alt=""
    //                                           title=""
    //                                           style="
    //                                             outline: none;
    //                                             text-decoration: none;
    //                                             -ms-interpolation-mode: bicubic;
    //                                             clear: both;
    //                                             display: inline-block !important;
    //                                             border: none;
    //                                             height: auto;
    //                                             float: none;
    //                                             width: 16%;
    //                                             max-width: 23.47px;
    //                                           "
    //                                           width="23.47"
    //                                           class="v-src-width v-src-max-width"
    //                                         />
    //                                       </a>
    //                                     </td>
    //                                   </tr>
    //                                 </table>
    //                               </td>
    //                             </tr>
    //                           </tbody>
    //                         </table>

    //                         <!--[if (!mso)&(!IE)]><!-->
    //                       </div>
    //                       <!--<![endif]-->
    //                     </div>
    //                   </div>
    //                   <!--[if (mso)|(IE)]></td><![endif]-->
    //                   <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    //                 </div>
    //               </div>
    //             </div>

    //             <div
    //               class="u-row-container v-row-padding--vertical"
    //               style="
    //                 padding: 0px;
    //                 background-color: #e8e8e8;
    //                 border-bottom: 12px solid #4f46e5;
    //               "
    //             >
    //               <div
    //                 class="u-row"
    //                 style="
    //                   margin: 0 auto;
    //                   min-width: 320px;
    //                   max-width: 500px;
    //                   overflow-wrap: break-word;
    //                   word-wrap: break-word;
    //                   word-break: break-word;
    //                   background-color: transparent;
    //                 "
    //               >
    //                 <div
    //                   style="
    //                     border-collapse: collapse;
    //                     display: table;
    //                     width: 100%;
    //                     height: 100%;
    //                     background-color: transparent;
    //                   "
    //                 >
    //                   <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #e8e8e8;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->

    //                   <!--[if (mso)|(IE)]><td align="center" width="500" style="width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
    //                   <div
    //                     class="u-col u-col-100"
    //                     style="
    //                       max-width: 320px;
    //                       min-width: 500px;
    //                       display: table-cell;
    //                       vertical-align: top;
    //                     "
    //                   >
    //                     <div
    //                       style="
    //                         height: 100%;
    //                         width: 100% !important;
    //                         border-radius: 0px;
    //                         -webkit-border-radius: 0px;
    //                         -moz-border-radius: 0px;
    //                       "
    //                     >
    //                       <!--[if (!mso)&(!IE)]><!-->
    //                       <div
    //                         style="
    //                           box-sizing: border-box;
    //                           height: 100%;
    //                           padding: 0px;
    //                           border-top: 0px solid transparent;
    //                           border-left: 0px solid transparent;
    //                           border-right: 0px solid transparent;
    //                           border-bottom: 0px solid transparent;
    //                           border-radius: 0px;
    //                           -webkit-border-radius: 0px;
    //                           -moz-border-radius: 0px;
    //                         "
    //                       >
    //                         <!--<![endif]-->

    //                         <table
    //                           style="font-family: arial, helvetica, sans-serif"
    //                           role="presentation"
    //                           cellpadding="0"
    //                           cellspacing="0"
    //                           width="100%"
    //                           border="0"
    //                         >
    //                           <tbody>
    //                             <tr>
    //                               <td
    //                                 class="v-container-padding-padding"
    //                                 style="
    //                                   overflow-wrap: break-word;
    //                                   word-break: break-word;
    //                                   padding: 16px 16px 8px;
    //                                   font-family: arial, helvetica, sans-serif;
    //                                 "
    //                                 align="left"
    //                               >
    //                                 <h2
    //                                   class="v-font-size"
    //                                   style="
    //                                     margin: 0px;
    //                                     line-height: 140%;
    //                                     text-align: center;
    //                                     word-wrap: break-word;
    //                                     font-size: 16px;
    //                                     font-weight: 400;
    //                                   "
    //                                 >
    //                                   <a
    //                                     href="https://www.feedbacksync.com"
    //                                     target="_blank"
    //                                   >
    //                                     <span>www.feedbacksync.com</span>
    //                                   </a>
    //                                 </h2>
    //                               </td>
    //                             </tr>
    //                           </tbody>
    //                         </table>

    //                         <table
    //                           style="font-family: arial, helvetica, sans-serif"
    //                           role="presentation"
    //                           cellpadding="0"
    //                           cellspacing="0"
    //                           width="100%"
    //                           border="0"
    //                         >
    //                           <tbody>
    //                             <tr>
    //                               <td
    //                                 class="v-container-padding-padding"
    //                                 style="
    //                                   overflow-wrap: break-word;
    //                                   word-break: break-word;
    //                                   padding: 0px 32px 14px;
    //                                   font-family: arial, helvetica, sans-serif;
    //                                 "
    //                                 align="left"
    //                               >
    //                               <div
    //                               class="v-font-size"
    //                               style="
    //                                 font-size: 14px;
    //                                 line-height: 140%;
    //                                 text-align: center;
    //                                 word-wrap: break-word;                                  
    //                               "
    //                             >
    //                               <p style="line-height: 140%;">
    //                                 <span style="line-height: 19.6px"
    //                                   ><span style="line-height: 19.6px">
    //                                     No 68, Mahadevan Street, Westmambalam,
    //                                     T. Nagar, Chennai, Tamil Nadu
    //                                     600018</span
    //                                   > </span
    //                                 >
    //                               </p>
    //                             </div>
    //                               </td>
    //                             </tr>
    //                           </tbody>
    //                         </table>

    //                         <table
    //                           style="font-family: arial, helvetica, sans-serif"
    //                           role="presentation"
    //                           cellpadding="0"
    //                           cellspacing="0"
    //                           width="100%"
    //                           border="0"
    //                         >
    //                           <tbody>
    //                             <tr>
    //                               <td
    //                                 class="v-container-padding-padding"
    //                                 style="
    //                                   overflow-wrap: break-word;
    //                                   word-break: break-word;
    //                                   padding: 10px;
    //                                   font-family: arial, helvetica, sans-serif;
    //                                 "
    //                                 align="left"
    //                               >
    //                                 <table
    //                                   width="100%"
    //                                   cellpadding="0"
    //                                   cellspacing="0"
    //                                   border="0"
    //                                 >
    //                                   <tr>
    //                                     <td
    //                                       style="
    //                                         padding-right: 0px;
    //                                         padding-left: 0px;
    //                                       "
    //                                       align="center"
    //                                     >
    //                                       <a
    //                                         href="https://www.feedbacksync.com"
    //                                         target="_blank"
    //                                       >
    //                                         <img
    //                                           align="center"
    //                                           border="0"
    //                                           src="https://feedbackuploadimage.s3.ap-south-1.amazonaws.com/FeedbackBrand.png"
    //                                           alt=""
    //                                           title=""
    //                                           style="
    //                                             outline: none;
    //                                             text-decoration: none;
    //                                             -ms-interpolation-mode: bicubic;
    //                                             clear: both;
    //                                             display: inline-block !important;
    //                                             border: none;
    //                                             height: auto;
    //                                             float: none;
    //                                             max-width: 240px;
    //                                             padding-bottom: 16px;
    //                                           "
    //                                           class="v-src-width v-src-max-width"
    //                                         />
    //                                       </a>
    //                                     </td>
    //                                   </tr>
    //                                 </table>
    //                               </td>
    //                             </tr>
    //                           </tbody>
    //                         </table>

    //                         <!--[if (!mso)&(!IE)]><!-->
    //                       </div>
    //                       <!--<![endif]-->
    //                     </div>
    //                   </div>
    //                   <!--[if (mso)|(IE)]></td><![endif]-->
    //                   <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    //                 </div>
    //               </div>
    //             </div>

    //             <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
    //           </td>
    //         </tr>
    //       </tbody>
    //     </table>
    //     <!--[if mso]></div><![endif]-->
    //     <!--[if IE]></div><![endif]-->
    //   </body>
    // </html>


    // `;
};

exports.appliedJob = async ({name, email, jobname, phone, coverLetter}) => {
    return ` Hi ${name}
    <br />
    <br />
    Email: ${email}
    <br />
    <br />
    Phone: ${phone}
    <br />
    <br />
    JobPost: ${jobname}
    <br />
    <br />
    CoverLetter: ${coverLetter}
    `
    // return `
    // <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    // <html
    //   xmlns="http://www.w3.org/1999/xhtml"
    //   xmlns:v="urn:schemas-microsoft-com:vml"
    //   xmlns:o="urn:schemas-microsoft-com:office:office"
    // >
    //   <head>
    //     <!--[if gte mso 9]>
    //       <xml>
    //         <o:OfficeDocumentSettings>
    //           <o:AllowPNG />
    //           <o:PixelsPerInch>96</o:PixelsPerInch>
    //         </o:OfficeDocumentSettings>
    //       </xml>
    //     <![endif]-->
    //     <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    //     <meta name="x-apple-disable-message-reformatting" />
    //     <!--[if !mso]><!-->
    //     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    //     <!--<![endif]-->
    //     <title></title>

    //     <style type="text/css">
    //       @media only screen and (min-width: 520px) {
    //         .u-row {
    //           width: 500px !important;
    //         }

    //         .u-row .u-col {
    //           vertical-align: top;
    //         }

    //         .u-row .u-col-33p33 {
    //           width: 166.65px !important;
    //         }

    //         .u-row .u-col-100 {
    //           width: 500px !important;
    //         }
    //       }

    //       @media (max-width: 520px) {
    //         .u-row-container {
    //           max-width: 100% !important;
    //           padding-left: 0px !important;
    //           padding-right: 0px !important;
    //         }

    //         .u-row .u-col {
    //           min-width: 320px !important;
    //           max-width: 100% !important;
    //           display: block !important;
    //         }

    //         .u-row {
    //           width: 100% !important;
    //         }

    //         .u-col {
    //           width: 100% !important;
    //         }

    //         .u-col > div {
    //           margin: 0 auto;
    //         }

    //         .no-stack .u-col {
    //           min-width: 0 !important;
    //           display: table-cell !important;
    //         }

    //         .no-stack .u-col-33p33 {
    //           width: 33.33% !important;
    //         }
    //       }

    //       body {
    //         margin: 0;
    //         padding: 0;
    //       }

    //       table,
    //       tr,
    //       td {
    //         vertical-align: top;
    //         border-collapse: collapse;
    //       }

    //       p {
    //         margin: 0;
    //       }

    //       .ie-container table,
    //       .mso-container table {
    //         table-layout: fixed;
    //       }

    //       * {
    //         line-height: inherit;
    //       }

    //       a[x-apple-data-detectors="true"] {
    //         color: inherit !important;
    //         text-decoration: none !important;
    //       }

    //       table,
    //       td {
    //         color: #000000;
    //       }

    //       #u_body a {
    //         color: #0000ee;
    //         text-decoration: underline;
    //       }

    //       @media (max-width: 480px) {
    //         #u_row_3.v-row-padding--vertical {
    //           padding-top: 16px !important;
    //           padding-bottom: 16px !important;
    //         }

    //         #u_content_heading_1 .v-container-padding-padding {
    //           padding: 32px 32px 16px !important;
    //         }

    //         #u_content_heading_1 .v-font-size {
    //           font-size: 17px !important;
    //         }

    //         #u_content_text_1 .v-container-padding-padding {
    //           padding: 0px 32px 24px !important;
    //         }

    //         #u_content_text_1 .v-font-size {
    //           font-size: 13px !important;
    //         }

    //         #u_content_button_1 .v-size-width {
    //           width: auto !important;
    //         }

    //         #u_content_image_2 .v-src-width {
    //           width: auto !important;
    //         }

    //         #u_content_image_2 .v-src-max-width {
    //           max-width: 25% !important;
    //         }

    //         #u_content_image_3 .v-src-width {
    //           width: auto !important;
    //         }

    //         #u_content_image_3 .v-src-max-width {
    //           max-width: 25% !important;
    //         }

    //         #u_content_image_4 .v-src-width {
    //           width: auto !important;
    //         }

    //         #u_content_image_4 .v-src-max-width {
    //           max-width: 25% !important;
    //         }
    //       }
    //     </style>
    //   </head>

    //   <body
    //     class="clean-body u_body"
    //     style="
    //       margin: 0;
    //       padding: 0;
    //       -webkit-text-size-adjust: 100%;
    //       background-color: #e7e7e7;
    //       color: #000000;
    //     "
    //   >
    //     <!--[if IE]><div class="ie-container"><![endif]-->
    //     <!--[if mso]><div class="mso-container"><![endif]-->
    //     <table
    //       id="u_body"
    //       style="
    //         border-collapse: collapse;
    //         table-layout: fixed;
    //         border-spacing: 0;
    //         mso-table-lspace: 0pt;
    //         mso-table-rspace: 0pt;
    //         vertical-align: top;
    //         min-width: 320px;
    //         margin: 0 auto;
    //         background-color: #e7e7e7;
    //         width: 100%;
    //       "
    //       cellpadding="0"
    //       cellspacing="0"
    //     >
    //       <tbody>
    //         <tr style="vertical-align: top">
    //           <td
    //             style="
    //               word-break: break-word;
    //               border-collapse: collapse !important;
    //               vertical-align: top;
    //             "
    //           >
    //             <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->

    //             <div
    //               class="u-row-container v-row-padding--vertical"
    //               style="padding: 0px; background-color: #e7f3ff"
    //             >
    //               <div
    //                 class="u-row"
    //                 style="
    //                   margin: 0 auto;
    //                   min-width: 320px;
    //                   max-width: 500px;
    //                   overflow-wrap: break-word;
    //                   word-wrap: break-word;
    //                   word-break: break-word;
    //                   background-color: transparent;
    //                 "
    //               >
    //                 <div
    //                   style="
    //                     border-collapse: collapse;
    //                     display: table;
    //                     width: 100%;
    //                     height: 100%;
    //                     background-color: transparent;
    //                   "
    //                 >
    //                   <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #e7f3ff;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->

    //                   <!--[if (mso)|(IE)]><td align="center" width="500" style="width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
    //                   <div
    //                     class="u-col u-col-100"
    //                     style="
    //                       max-width: 320px;
    //                       min-width: 500px;
    //                       display: table-cell;
    //                       vertical-align: top;
    //                     "
    //                   >
    //                     <div style="height: 100%; width: 100% !important">
    //                       <!--[if (!mso)&(!IE)]><!-->
    //                       <div
    //                         style="
    //                           box-sizing: border-box;
    //                           height: 100%;
    //                           padding: 0px;
    //                           border-top: 0px solid transparent;
    //                           border-left: 0px solid transparent;
    //                           border-right: 0px solid transparent;
    //                           border-bottom: 0px solid transparent;
    //                         "
    //                       >
    //                         <!--<![endif]-->

    //                         <table
    //                           style="font-family: arial, helvetica, sans-serif"
    //                           role="presentation"
    //                           cellpadding="0"
    //                           cellspacing="0"
    //                           width="100%"
    //                           border="0"
    //                         >
    //                           <tbody>
    //                             <tr>
    //                               <td
    //                                 class="v-container-padding-padding"
    //                                 style="
    //                                   overflow-wrap: break-word;
    //                                   word-break: break-word;
    //                                   padding: 10px;
    //                                   font-family: arial, helvetica, sans-serif;
    //                                 "
    //                                 align="left"
    //                               >
    //                                 <table
    //                                   width="100%"
    //                                   cellpadding="0"
    //                                   cellspacing="0"
    //                                   border="0"
    //                                 >
    //                                   <tr>
    //                                     <td
    //                                       style="
    //                                         padding-right: 0px;
    //                                         padding-left: 0px;
    //                                       "
    //                                       align="center"
    //                                     >
    //                                       <img
    //                                         align="center"
    //                                         border="0"
    //                                         src="https://peacockimages.s3.ap-south-1.amazonaws.com/Logo.svg"
    //                                         alt=""
    //                                         title=""
    //                                         style="
    //                                           outline: none;
    //                                           text-decoration: none;
    //                                           -ms-interpolation-mode: bicubic;
    //                                           clear: both;
    //                                           display: inline-block !important;
    //                                           border: none;
    //                                           height: auto;
    //                                           float: none;
    //                                           width: 50%;
    //                                           max-width: 240px;
    //                                         "
    //                                         width="240"
    //                                         class="v-src-width v-src-max-width"
    //                                       />
    //                                     </td>
    //                                   </tr>
    //                                 </table>
    //                               </td>
    //                             </tr>
    //                           </tbody>
    //                         </table>

    //                         <!--[if (!mso)&(!IE)]><!-->
    //                       </div>
    //                       <!--<![endif]-->
    //                     </div>
    //                   </div>
    //                   <!--[if (mso)|(IE)]></td><![endif]-->
    //                   <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    //                 </div>
    //               </div>
    //             </div>

    //             <div
    //               id="u_row_3"
    //               class="u-row-container v-row-padding--vertical"
    //               style="padding: 24px; background-color: #e7f3ff"
    //             >
    //               <div
    //                 class="u-row"
    //                 style="
    //                   margin: 0 auto;
    //                   min-width: 320px;
    //                   max-width: 500px;
    //                   overflow-wrap: break-word;
    //                   word-wrap: break-word;
    //                   word-break: break-word;
    //                   background-color: transparent;
    //                 "
    //               >
    //                 <div
    //                   style="
    //                     border-collapse: collapse;
    //                     display: table;
    //                     width: 100%;
    //                     height: 100%;
    //                     background-color: transparent;
    //                   "
    //                 >
    //                   <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 24px;background-color: #e7f3ff;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->

    //                   <!--[if (mso)|(IE)]><td align="center" width="500" style="background-color: #ffffff;width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
    //                   <div
    //                     class="u-col u-col-100"
    //                     style="
    //                       max-width: 320px;
    //                       min-width: 500px;
    //                       display: table-cell;
    //                       vertical-align: top;
    //                     "
    //                   >
    //                     <div
    //                       style="
    //                         background-color: #ffffff;
    //                         height: 100%;
    //                         width: 100% !important;
    //                         border-radius: 10px;
    //                         -webkit-border-radius: 10px;
    //                         -moz-border-radius: 10px;
    //                         box-shadow: 0 0 18px rgba(0, 0, 0, 0.1);
    //                       "
    //                     >
    //                       <!--[if (!mso)&(!IE)]><!-->
    //                       <div
    //                         style="
    //                           box-sizing: border-box;
    //                           height: 100%;
    //                           padding: 0px;
    //                           border-top: 0px solid transparent;
    //                           border-left: 0px solid transparent;
    //                           border-right: 0px solid transparent;
    //                           border-bottom: 0px solid transparent;
    //                           border-radius: 0px;
    //                           -webkit-border-radius: 0px;
    //                           -moz-border-radius: 0px;
    //                         "
    //                       >
    //                         <!--<![endif]-->

    //                         <table
    //                           id="u_content_heading_1"
    //                           style="font-family: arial, helvetica, sans-serif"
    //                           role="presentation"
    //                           cellpadding="0"
    //                           cellspacing="0"
    //                           width="100%"
    //                           border="0"
    //                         >
    //                           <tbody>
    //                             <tr>
    //                               <td
    //                                 class="v-container-padding-padding"
    //                                 style="
    //                                   overflow-wrap: break-word;
    //                                   word-break: break-word;
    //                                   padding: 32px 32px 16px;
    //                                   font-family: arial, helvetica, sans-serif;
    //                                 "
    //                                 align="left"
    //                               >
    //                                 <h1
    //                                   class="v-font-size"
    //                                   style="
    //                                     margin: 0px;
    //                                     line-height: 140%;
    //                                     text-align: left;
    //                                     word-wrap: break-word;
    //                                     font-size: 20px;
    //                                     font-weight: 700;
    //                                   "
    //                                 >
    //                                   <span
    //                                     >Welcome come to feedbacksync!</span
    //                                   >
    //                                 </h1>
    //                               </td>
    //                             </tr>
    //                           </tbody>
    //                         </table>

    //                         <table
    //                           id="u_content_text_1"
    //                           style="font-family: arial, helvetica, sans-serif"
    //                           role="presentation"
    //                           cellpadding="0"
    //                           cellspacing="0"
    //                           width="100%"
    //                           border="0"
    //                         >
    //                           <tbody>
    //                             <tr>
    //                               <td
    //                                 class="v-container-padding-padding"
    //                                 style="
    //                                   overflow-wrap: break-word;
    //                                   word-break: break-word;
    //                                   padding: 0px 32px 24px;
    //                                   font-family: arial, helvetica, sans-serif;
    //                                 "
    //                                 align="left"
    //                               >
    //                                 <div
    //                                   class="v-font-size"
    //                                   style="
    //                                     font-size: 16px;
    //                                     line-height: 140%;
    //                                     text-align: left;
    //                                     word-wrap: break-word;
    //                                   "
    //                                 >
    //                                   <p style="line-height: 140%">
    //                                     <span style="line-height: 22.4px"
    //                                       >Hi ${name},<br /><br />Hope you're doing well! <br /><br />
    //                                       <div align="left">
    //                                       <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://app.feedbacksync.com/" style="height:37px; v-text-anchor:middle; width:157px;" arcsize="13.5%"  stroke="f" fillcolor="#4f46e5"><w:anchorlock/><center style="color:#FFFFFF;"><![endif]-->
    //                                       <a
    //                                         href="https://app.feedbacksync.com/"
    //                                         target="_blank"
    //                                         class="v-button v-size-width v-font-size"
    //                                         style="
    //                                           box-sizing: border-box;
    //                                           display: inline-block;
    //                                           text-decoration: none;
    //                                           -webkit-text-size-adjust: none;
    //                                           text-align: center;
    //                                           color: #ffffff;
    //                                           background-color: #4f46e5;
    //                                           border-radius: 5px;
    //                                           -webkit-border-radius: 5px;
    //                                           -moz-border-radius: 5px;
    //                                           width: 36%;
    //                                           max-width: 100%;
    //                                           overflow-wrap: break-word;
    //                                           word-break: break-word;
    //                                           word-wrap: break-word;
    //                                           mso-border-alt: none;
    //                                           font-size: 14px;
    //                                         "
    //                                       >
    //                                         <span
    //                                           style="
    //                                             display: block;
    //                                             padding: 10px 20px;
    //                                             line-height: 120%;
    //                                           "
    //                                           ><span style="line-height: 16.8px"
    //                                             >Log in</span
    //                                           ></span
    //                                         >
    //                                       </a>
    //                                       <!--[if mso]></center></v:roundrect><![endif]-->
    //                                     </div><br /><br />Once logged in, you can create, distribute, and analyze surveys.<br /><br />Let me know if you need any help.
    //                                       <br /><br />Best regards,<br />${company_name}</span
    //                                     >
    //                                   </p>
    //                                 </div>
    //                               </td>
    //                             </tr>
    //                           </tbody>
    //                         </table>

    //                         <!--[if (!mso)&(!IE)]><!-->
    //                       </div>
    //                       <!--<![endif]-->
    //                     </div>
    //                   </div>
    //                   <!--[if (mso)|(IE)]></td><![endif]-->
    //                   <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    //                 </div>
    //               </div>
    //             </div>

    //             <div
    //               class="u-row-container v-row-padding--vertical"
    //               style="
    //                 padding: 0px;
    //                 background-color: transparent;
    //                 margin-top: 24px;
    //               "
    //             >
    //               <div
    //                 class="u-row no-stack"
    //                 style="
    //                   margin: 0 auto;
    //                   min-width: 320px;
    //                   max-width: 500px;
    //                   overflow-wrap: break-word;
    //                   word-wrap: break-word;
    //                   word-break: break-word;
    //                   background-color: transparent;
    //                 "
    //               >
    //                 <div
    //                   style="
    //                     border-collapse: collapse;
    //                     display: table;
    //                     width: 100%;
    //                     height: 100%;
    //                     background-color: transparent;
    //                   "
    //                 >
    //                   <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->

    //                   <!--[if (mso)|(IE)]><td align="center" width="166" style="width: 166px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
    //                   <div
    //                     class="u-col u-col-33p33"
    //                     style="
    //                       max-width: 320px;
    //                       min-width: 166.67px;
    //                       display: table-cell;
    //                       vertical-align: top;
    //                     "
    //                   >
    //                     <div
    //                       style="
    //                         height: 100%;
    //                         width: 100% !important;
    //                         border-radius: 0px;
    //                         -webkit-border-radius: 0px;
    //                         -moz-border-radius: 0px;
    //                       "
    //                     >
    //                       <!--[if (!mso)&(!IE)]><!-->
    //                       <div
    //                         style="
    //                           box-sizing: border-box;
    //                           height: 100%;
    //                           padding: 0px;
    //                           border-top: 0px solid transparent;
    //                           border-left: 0px solid transparent;
    //                           border-right: 0px solid transparent;
    //                           border-bottom: 0px solid transparent;
    //                           border-radius: 0px;
    //                           -webkit-border-radius: 0px;
    //                           -moz-border-radius: 0px;
    //                         "
    //                       >
    //                         <!--<![endif]-->

    //                         <table
    //                           id="u_content_image_2"
    //                           style="font-family: arial, helvetica, sans-serif"
    //                           role="presentation"
    //                           cellpadding="0"
    //                           cellspacing="0"
    //                           width="100%"
    //                           border="0"
    //                         >
    //                           <tbody>
    //                             <tr>
    //                               <td
    //                                 class="v-container-padding-padding"
    //                                 style="
    //                                   overflow-wrap: break-word;
    //                                   word-break: break-word;
    //                                   padding: 10px;
    //                                   font-family: arial, helvetica, sans-serif;
    //                                 "
    //                                 align="left"
    //                               >
    //                                 <table
    //                                   width="100%"
    //                                   cellpadding="0"
    //                                   cellspacing="0"
    //                                   border="0"
    //                                 >
    //                                   <tr>
    //                                     <td
    //                                       style="
    //                                         padding-right: 0px;
    //                                         padding-left: 0px;
    //                                       "
    //                                       align="right"
    //                                     >
    //                                       <a
    //                                         href="https://twitter.com/feedbacksync"
    //                                         target="_blank"
    //                                       >
    //                                         <img
    //                                           align="right"
    //                                           border="0"
    //                                           src="https://feedbackuploadimage.s3.ap-south-1.amazonaws.com/X+svg.png"
    //                                           alt=""
    //                                           title=""
    //                                           style="
    //                                             outline: none;
    //                                             text-decoration: none;
    //                                             -ms-interpolation-mode: bicubic;
    //                                             clear: both;
    //                                             display: inline-block !important;
    //                                             border: none;
    //                                             height: auto;
    //                                             float: none;
    //                                             width: 16%;
    //                                             max-width: 23.47px;
    //                                           "
    //                                           width="23.47"
    //                                           class="v-src-width v-src-max-width"
    //                                         />
    //                                       </a>
    //                                     </td>
    //                                   </tr>
    //                                 </table>
    //                               </td>
    //                             </tr>
    //                           </tbody>
    //                         </table>

    //                         <!--[if (!mso)&(!IE)]><!-->
    //                       </div>
    //                       <!--<![endif]-->
    //                     </div>
    //                   </div>
    //                   <!--[if (mso)|(IE)]></td><![endif]-->
    //                   <!--[if (mso)|(IE)]><td align="center" width="166" style="width: 166px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
    //                   <div
    //                     class="u-col u-col-33p33"
    //                     style="
    //                       max-width: 320px;
    //                       min-width: 166.67px;
    //                       display: table-cell;
    //                       vertical-align: top;
    //                     "
    //                   >
    //                     <div
    //                       style="
    //                         height: 100%;
    //                         width: 100% !important;
    //                         border-radius: 0px;
    //                         -webkit-border-radius: 0px;
    //                         -moz-border-radius: 0px;
    //                       "
    //                     >
    //                       <!--[if (!mso)&(!IE)]><!-->
    //                       <div
    //                         style="
    //                           box-sizing: border-box;
    //                           height: 100%;
    //                           padding: 0px;
    //                           border-top: 0px solid transparent;
    //                           border-left: 0px solid transparent;
    //                           border-right: 0px solid transparent;
    //                           border-bottom: 0px solid transparent;
    //                           border-radius: 0px;
    //                           -webkit-border-radius: 0px;
    //                           -moz-border-radius: 0px;
    //                         "
    //                       >
    //                         <!--<![endif]-->

    //                         <table
    //                           id="u_content_image_3"
    //                           style="font-family: arial, helvetica, sans-serif"
    //                           role="presentation"
    //                           cellpadding="0"
    //                           cellspacing="0"
    //                           width="100%"
    //                           border="0"
    //                         >
    //                           <tbody>
    //                             <tr>
    //                               <td
    //                                 class="v-container-padding-padding"
    //                                 style="
    //                                   overflow-wrap: break-word;
    //                                   word-break: break-word;
    //                                   padding: 10px;
    //                                   font-family: arial, helvetica, sans-serif;
    //                                 "
    //                                 align="left"
    //                               >
    //                                 <table
    //                                   width="100%"
    //                                   cellpadding="0"
    //                                   cellspacing="0"
    //                                   border="0"
    //                                 >
    //                                   <tr>
    //                                     <td
    //                                       style="
    //                                         padding-right: 0px;
    //                                         padding-left: 0px;
    //                                       "
    //                                       align="center"
    //                                     >
    //                                       <a
    //                                         href="https://www.facebook.com/feedbacksync"
    //                                         target="_blank"
    //                                       >
    //                                         <img
    //                                           align="center"
    //                                           border="0"
    //                                           src="https://feedbackuploadimage.s3.ap-south-1.amazonaws.com/facebook.png"
    //                                           alt=""
    //                                           title=""
    //                                           style="
    //                                             outline: none;
    //                                             text-decoration: none;
    //                                             -ms-interpolation-mode: bicubic;
    //                                             clear: both;
    //                                             display: inline-block !important;
    //                                             border: none;
    //                                             height: auto;
    //                                             float: none;
    //                                             width: 16%;
    //                                             max-width: 23.47px;
    //                                           "
    //                                           width="23.47"
    //                                           class="v-src-width v-src-max-width"
    //                                         />
    //                                       </a>
    //                                     </td>
    //                                   </tr>
    //                                 </table>
    //                               </td>
    //                             </tr>
    //                           </tbody>
    //                         </table>

    //                         <!--[if (!mso)&(!IE)]><!-->
    //                       </div>
    //                       <!--<![endif]-->
    //                     </div>
    //                   </div>
    //                   <!--[if (mso)|(IE)]></td><![endif]-->
    //                   <!--[if (mso)|(IE)]><td align="center" width="166" style="width: 166px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
    //                   <div
    //                     class="u-col u-col-33p33"
    //                     style="
    //                       max-width: 320px;
    //                       min-width: 166.67px;
    //                       display: table-cell;
    //                       vertical-align: top;
    //                     "
    //                   >
    //                     <div
    //                       style="
    //                         height: 100%;
    //                         width: 100% !important;
    //                         border-radius: 0px;
    //                         -webkit-border-radius: 0px;
    //                         -moz-border-radius: 0px;
    //                       "
    //                     >
    //                       <!--[if (!mso)&(!IE)]><!-->
    //                       <div
    //                         style="
    //                           box-sizing: border-box;
    //                           height: 100%;
    //                           padding: 0px;
    //                           border-top: 0px solid transparent;
    //                           border-left: 0px solid transparent;
    //                           border-right: 0px solid transparent;
    //                           border-bottom: 0px solid transparent;
    //                           border-radius: 0px;
    //                           -webkit-border-radius: 0px;
    //                           -moz-border-radius: 0px;
    //                         "
    //                       >
    //                         <!--<![endif]-->

    //                         <table
    //                           id="u_content_image_4"
    //                           style="font-family: arial, helvetica, sans-serif"
    //                           role="presentation"
    //                           cellpadding="0"
    //                           cellspacing="0"
    //                           width="100%"
    //                           border="0"
    //                         >
    //                           <tbody>
    //                             <tr>
    //                               <td
    //                                 class="v-container-padding-padding"
    //                                 style="
    //                                   overflow-wrap: break-word;
    //                                   word-break: break-word;
    //                                   padding: 10px;
    //                                   font-family: arial, helvetica, sans-serif;
    //                                 "
    //                                 align="left"
    //                               >
    //                                 <table
    //                                   width="100%"
    //                                   cellpadding="0"
    //                                   cellspacing="0"
    //                                   border="0"
    //                                 >
    //                                   <tr>
    //                                     <td
    //                                       style="
    //                                         padding-right: 0px;
    //                                         padding-left: 0px;
    //                                       "
    //                                       align="left"
    //                                     >
    //                                       <a
    //                                         href="https://www.instagram.com/feedbacksync"
    //                                         target="_blank"
    //                                       >
    //                                         <img
    //                                           align="left"
    //                                           border="0"
    //                                           src="https://feedbackuploadimage.s3.ap-south-1.amazonaws.com/instagram.png"
    //                                           alt=""
    //                                           title=""
    //                                           style="
    //                                             outline: none;
    //                                             text-decoration: none;
    //                                             -ms-interpolation-mode: bicubic;
    //                                             clear: both;
    //                                             display: inline-block !important;
    //                                             border: none;
    //                                             height: auto;
    //                                             float: none;
    //                                             width: 16%;
    //                                             max-width: 23.47px;
    //                                           "
    //                                           width="23.47"
    //                                           class="v-src-width v-src-max-width"
    //                                         />
    //                                       </a>
    //                                     </td>
    //                                   </tr>
    //                                 </table>
    //                               </td>
    //                             </tr>
    //                           </tbody>
    //                         </table>

    //                         <!--[if (!mso)&(!IE)]><!-->
    //                       </div>
    //                       <!--<![endif]-->
    //                     </div>
    //                   </div>
    //                   <!--[if (mso)|(IE)]></td><![endif]-->
    //                   <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    //                 </div>
    //               </div>
    //             </div>

    //             <div
    //               class="u-row-container v-row-padding--vertical"
    //               style="
    //                 padding: 0px;
    //                 background-color: #e8e8e8;
    //                 border-bottom: 12px solid #4f46e5;
    //               "
    //             >
    //               <div
    //                 class="u-row"
    //                 style="
    //                   margin: 0 auto;
    //                   min-width: 320px;
    //                   max-width: 500px;
    //                   overflow-wrap: break-word;
    //                   word-wrap: break-word;
    //                   word-break: break-word;
    //                   background-color: transparent;
    //                 "
    //               >
    //                 <div
    //                   style="
    //                     border-collapse: collapse;
    //                     display: table;
    //                     width: 100%;
    //                     height: 100%;
    //                     background-color: transparent;
    //                   "
    //                 >
    //                   <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #e8e8e8;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->

    //                   <!--[if (mso)|(IE)]><td align="center" width="500" style="width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
    //                   <div
    //                     class="u-col u-col-100"
    //                     style="
    //                       max-width: 320px;
    //                       min-width: 500px;
    //                       display: table-cell;
    //                       vertical-align: top;
    //                     "
    //                   >
    //                     <div
    //                       style="
    //                         height: 100%;
    //                         width: 100% !important;
    //                         border-radius: 0px;
    //                         -webkit-border-radius: 0px;
    //                         -moz-border-radius: 0px;
    //                       "
    //                     >
    //                       <!--[if (!mso)&(!IE)]><!-->
    //                       <div
    //                         style="
    //                           box-sizing: border-box;
    //                           height: 100%;
    //                           padding: 0px;
    //                           border-top: 0px solid transparent;
    //                           border-left: 0px solid transparent;
    //                           border-right: 0px solid transparent;
    //                           border-bottom: 0px solid transparent;
    //                           border-radius: 0px;
    //                           -webkit-border-radius: 0px;
    //                           -moz-border-radius: 0px;
    //                         "
    //                       >
    //                         <!--<![endif]-->

    //                         <table
    //                           style="font-family: arial, helvetica, sans-serif"
    //                           role="presentation"
    //                           cellpadding="0"
    //                           cellspacing="0"
    //                           width="100%"
    //                           border="0"
    //                         >
    //                           <tbody>
    //                             <tr>
    //                               <td
    //                                 class="v-container-padding-padding"
    //                                 style="
    //                                   overflow-wrap: break-word;
    //                                   word-break: break-word;
    //                                   padding: 16px 16px 8px;
    //                                   font-family: arial, helvetica, sans-serif;
    //                                 "
    //                                 align="left"
    //                               >
    //                                 <h2
    //                                   class="v-font-size"
    //                                   style="
    //                                     margin: 0px;
    //                                     line-height: 140%;
    //                                     text-align: center;
    //                                     word-wrap: break-word;
    //                                     font-size: 16px;
    //                                     font-weight: 400;
    //                                   "
    //                                 >
    //                                   <a
    //                                     href="https://www.feedbacksync.com"
    //                                     target="_blank"
    //                                   >
    //                                     <span>www.feedbacksync.com</span>
    //                                   </a>
    //                                 </h2>
    //                               </td>
    //                             </tr>
    //                           </tbody>
    //                         </table>

    //                         <table
    //                           style="font-family: arial, helvetica, sans-serif"
    //                           role="presentation"
    //                           cellpadding="0"
    //                           cellspacing="0"
    //                           width="100%"
    //                           border="0"
    //                         >
    //                           <tbody>
    //                             <tr>
    //                               <td
    //                                 class="v-container-padding-padding"
    //                                 style="
    //                                   overflow-wrap: break-word;
    //                                   word-break: break-word;
    //                                   padding: 0px 32px 14px;
    //                                   font-family: arial, helvetica, sans-serif;
    //                                 "
    //                                 align="left"
    //                               >
    //                               <div
    //                               class="v-font-size"
    //                               style="
    //                                 font-size: 14px;
    //                                 line-height: 140%;
    //                                 text-align: center;
    //                                 word-wrap: break-word;                                  
    //                               "
    //                             >
    //                               <p style="line-height: 140%;">
    //                                 <span style="line-height: 19.6px"
    //                                   ><span style="line-height: 19.6px">
    //                                     No 68, Mahadevan Street, Westmambalam,
    //                                     T. Nagar, Chennai, Tamil Nadu
    //                                     600018</span
    //                                   > </span
    //                                 >
    //                               </p>
    //                             </div>
    //                               </td>
    //                             </tr>
    //                           </tbody>
    //                         </table>

    //                         <table
    //                           style="font-family: arial, helvetica, sans-serif"
    //                           role="presentation"
    //                           cellpadding="0"
    //                           cellspacing="0"
    //                           width="100%"
    //                           border="0"
    //                         >
    //                           <tbody>
    //                             <tr>
    //                               <td
    //                                 class="v-container-padding-padding"
    //                                 style="
    //                                   overflow-wrap: break-word;
    //                                   word-break: break-word;
    //                                   padding: 10px;
    //                                   font-family: arial, helvetica, sans-serif;
    //                                 "
    //                                 align="left"
    //                               >
    //                                 <table
    //                                   width="100%"
    //                                   cellpadding="0"
    //                                   cellspacing="0"
    //                                   border="0"
    //                                 >
    //                                   <tr>
    //                                     <td
    //                                       style="
    //                                         padding-right: 0px;
    //                                         padding-left: 0px;
    //                                       "
    //                                       align="center"
    //                                     >
    //                                       <a
    //                                         href="https://www.feedbacksync.com"
    //                                         target="_blank"
    //                                       >
    //                                         <img
    //                                           align="center"
    //                                           border="0"
    //                                           src="https://feedbackuploadimage.s3.ap-south-1.amazonaws.com/FeedbackBrand.png"
    //                                           alt=""
    //                                           title=""
    //                                           style="
    //                                             outline: none;
    //                                             text-decoration: none;
    //                                             -ms-interpolation-mode: bicubic;
    //                                             clear: both;
    //                                             display: inline-block !important;
    //                                             border: none;
    //                                             height: auto;
    //                                             float: none;
    //                                             max-width: 240px;
    //                                             padding-bottom: 16px;
    //                                           "
    //                                           class="v-src-width v-src-max-width"
    //                                         />
    //                                       </a>
    //                                     </td>
    //                                   </tr>
    //                                 </table>
    //                               </td>
    //                             </tr>
    //                           </tbody>
    //                         </table>

    //                         <!--[if (!mso)&(!IE)]><!-->
    //                       </div>
    //                       <!--<![endif]-->
    //                     </div>
    //                   </div>
    //                   <!--[if (mso)|(IE)]></td><![endif]-->
    //                   <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    //                 </div>
    //               </div>
    //             </div>

    //             <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
    //           </td>
    //         </tr>
    //       </tbody>
    //     </table>
    //     <!--[if mso]></div><![endif]-->
    //     <!--[if IE]></div><![endif]-->
    //   </body>
    // </html>


    // `;
};

exports.replyForAppliedJobUser = async ({name}) => {
    return ` Hi ${name}
    <br />
    <br />
    Thankyou for applying the job vacancy
    `
    // return `
    // <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    // <html
    //   xmlns="http://www.w3.org/1999/xhtml"
    //   xmlns:v="urn:schemas-microsoft-com:vml"
    //   xmlns:o="urn:schemas-microsoft-com:office:office"
    // >
    //   <head>
    //     <!--[if gte mso 9]>
    //       <xml>
    //         <o:OfficeDocumentSettings>
    //           <o:AllowPNG />
    //           <o:PixelsPerInch>96</o:PixelsPerInch>
    //         </o:OfficeDocumentSettings>
    //       </xml>
    //     <![endif]-->
    //     <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    //     <meta name="x-apple-disable-message-reformatting" />
    //     <!--[if !mso]><!-->
    //     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    //     <!--<![endif]-->
    //     <title></title>

    //     <style type="text/css">
    //       @media only screen and (min-width: 520px) {
    //         .u-row {
    //           width: 500px !important;
    //         }

    //         .u-row .u-col {
    //           vertical-align: top;
    //         }

    //         .u-row .u-col-33p33 {
    //           width: 166.65px !important;
    //         }

    //         .u-row .u-col-100 {
    //           width: 500px !important;
    //         }
    //       }

    //       @media (max-width: 520px) {
    //         .u-row-container {
    //           max-width: 100% !important;
    //           padding-left: 0px !important;
    //           padding-right: 0px !important;
    //         }

    //         .u-row .u-col {
    //           min-width: 320px !important;
    //           max-width: 100% !important;
    //           display: block !important;
    //         }

    //         .u-row {
    //           width: 100% !important;
    //         }

    //         .u-col {
    //           width: 100% !important;
    //         }

    //         .u-col > div {
    //           margin: 0 auto;
    //         }

    //         .no-stack .u-col {
    //           min-width: 0 !important;
    //           display: table-cell !important;
    //         }

    //         .no-stack .u-col-33p33 {
    //           width: 33.33% !important;
    //         }
    //       }

    //       body {
    //         margin: 0;
    //         padding: 0;
    //       }

    //       table,
    //       tr,
    //       td {
    //         vertical-align: top;
    //         border-collapse: collapse;
    //       }

    //       p {
    //         margin: 0;
    //       }

    //       .ie-container table,
    //       .mso-container table {
    //         table-layout: fixed;
    //       }

    //       * {
    //         line-height: inherit;
    //       }

    //       a[x-apple-data-detectors="true"] {
    //         color: inherit !important;
    //         text-decoration: none !important;
    //       }

    //       table,
    //       td {
    //         color: #000000;
    //       }

    //       #u_body a {
    //         color: #0000ee;
    //         text-decoration: underline;
    //       }

    //       @media (max-width: 480px) {
    //         #u_row_3.v-row-padding--vertical {
    //           padding-top: 16px !important;
    //           padding-bottom: 16px !important;
    //         }

    //         #u_content_heading_1 .v-container-padding-padding {
    //           padding: 32px 32px 16px !important;
    //         }

    //         #u_content_heading_1 .v-font-size {
    //           font-size: 17px !important;
    //         }

    //         #u_content_text_1 .v-container-padding-padding {
    //           padding: 0px 32px 24px !important;
    //         }

    //         #u_content_text_1 .v-font-size {
    //           font-size: 13px !important;
    //         }

    //         #u_content_button_1 .v-size-width {
    //           width: auto !important;
    //         }

    //         #u_content_image_2 .v-src-width {
    //           width: auto !important;
    //         }

    //         #u_content_image_2 .v-src-max-width {
    //           max-width: 25% !important;
    //         }

    //         #u_content_image_3 .v-src-width {
    //           width: auto !important;
    //         }

    //         #u_content_image_3 .v-src-max-width {
    //           max-width: 25% !important;
    //         }

    //         #u_content_image_4 .v-src-width {
    //           width: auto !important;
    //         }

    //         #u_content_image_4 .v-src-max-width {
    //           max-width: 25% !important;
    //         }
    //       }
    //     </style>
    //   </head>

    //   <body
    //     class="clean-body u_body"
    //     style="
    //       margin: 0;
    //       padding: 0;
    //       -webkit-text-size-adjust: 100%;
    //       background-color: #e7e7e7;
    //       color: #000000;
    //     "
    //   >
    //     <!--[if IE]><div class="ie-container"><![endif]-->
    //     <!--[if mso]><div class="mso-container"><![endif]-->
    //     <table
    //       id="u_body"
    //       style="
    //         border-collapse: collapse;
    //         table-layout: fixed;
    //         border-spacing: 0;
    //         mso-table-lspace: 0pt;
    //         mso-table-rspace: 0pt;
    //         vertical-align: top;
    //         min-width: 320px;
    //         margin: 0 auto;
    //         background-color: #e7e7e7;
    //         width: 100%;
    //       "
    //       cellpadding="0"
    //       cellspacing="0"
    //     >
    //       <tbody>
    //         <tr style="vertical-align: top">
    //           <td
    //             style="
    //               word-break: break-word;
    //               border-collapse: collapse !important;
    //               vertical-align: top;
    //             "
    //           >
    //             <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->

    //             <div
    //               class="u-row-container v-row-padding--vertical"
    //               style="padding: 0px; background-color: #e7f3ff"
    //             >
    //               <div
    //                 class="u-row"
    //                 style="
    //                   margin: 0 auto;
    //                   min-width: 320px;
    //                   max-width: 500px;
    //                   overflow-wrap: break-word;
    //                   word-wrap: break-word;
    //                   word-break: break-word;
    //                   background-color: transparent;
    //                 "
    //               >
    //                 <div
    //                   style="
    //                     border-collapse: collapse;
    //                     display: table;
    //                     width: 100%;
    //                     height: 100%;
    //                     background-color: transparent;
    //                   "
    //                 >
    //                   <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #e7f3ff;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->

    //                   <!--[if (mso)|(IE)]><td align="center" width="500" style="width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
    //                   <div
    //                     class="u-col u-col-100"
    //                     style="
    //                       max-width: 320px;
    //                       min-width: 500px;
    //                       display: table-cell;
    //                       vertical-align: top;
    //                     "
    //                   >
    //                     <div style="height: 100%; width: 100% !important">
    //                       <!--[if (!mso)&(!IE)]><!-->
    //                       <div
    //                         style="
    //                           box-sizing: border-box;
    //                           height: 100%;
    //                           padding: 0px;
    //                           border-top: 0px solid transparent;
    //                           border-left: 0px solid transparent;
    //                           border-right: 0px solid transparent;
    //                           border-bottom: 0px solid transparent;
    //                         "
    //                       >
    //                         <!--<![endif]-->

    //                         <table
    //                           style="font-family: arial, helvetica, sans-serif"
    //                           role="presentation"
    //                           cellpadding="0"
    //                           cellspacing="0"
    //                           width="100%"
    //                           border="0"
    //                         >
    //                           <tbody>
    //                             <tr>
    //                               <td
    //                                 class="v-container-padding-padding"
    //                                 style="
    //                                   overflow-wrap: break-word;
    //                                   word-break: break-word;
    //                                   padding: 10px;
    //                                   font-family: arial, helvetica, sans-serif;
    //                                 "
    //                                 align="left"
    //                               >
    //                                 <table
    //                                   width="100%"
    //                                   cellpadding="0"
    //                                   cellspacing="0"
    //                                   border="0"
    //                                 >
    //                                   <tr>
    //                                     <td
    //                                       style="
    //                                         padding-right: 0px;
    //                                         padding-left: 0px;
    //                                       "
    //                                       align="center"
    //                                     >
    //                                       <img
    //                                         align="center"
    //                                         border="0"
    //                                         src="https://peacockimages.s3.ap-south-1.amazonaws.com/Logo.svg"
    //                                         alt=""
    //                                         title=""
    //                                         style="
    //                                           outline: none;
    //                                           text-decoration: none;
    //                                           -ms-interpolation-mode: bicubic;
    //                                           clear: both;
    //                                           display: inline-block !important;
    //                                           border: none;
    //                                           height: auto;
    //                                           float: none;
    //                                           width: 50%;
    //                                           max-width: 240px;
    //                                         "
    //                                         width="240"
    //                                         class="v-src-width v-src-max-width"
    //                                       />
    //                                     </td>
    //                                   </tr>
    //                                 </table>
    //                               </td>
    //                             </tr>
    //                           </tbody>
    //                         </table>

    //                         <!--[if (!mso)&(!IE)]><!-->
    //                       </div>
    //                       <!--<![endif]-->
    //                     </div>
    //                   </div>
    //                   <!--[if (mso)|(IE)]></td><![endif]-->
    //                   <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    //                 </div>
    //               </div>
    //             </div>

    //             <div
    //               id="u_row_3"
    //               class="u-row-container v-row-padding--vertical"
    //               style="padding: 24px; background-color: #e7f3ff"
    //             >
    //               <div
    //                 class="u-row"
    //                 style="
    //                   margin: 0 auto;
    //                   min-width: 320px;
    //                   max-width: 500px;
    //                   overflow-wrap: break-word;
    //                   word-wrap: break-word;
    //                   word-break: break-word;
    //                   background-color: transparent;
    //                 "
    //               >
    //                 <div
    //                   style="
    //                     border-collapse: collapse;
    //                     display: table;
    //                     width: 100%;
    //                     height: 100%;
    //                     background-color: transparent;
    //                   "
    //                 >
    //                   <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 24px;background-color: #e7f3ff;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->

    //                   <!--[if (mso)|(IE)]><td align="center" width="500" style="background-color: #ffffff;width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
    //                   <div
    //                     class="u-col u-col-100"
    //                     style="
    //                       max-width: 320px;
    //                       min-width: 500px;
    //                       display: table-cell;
    //                       vertical-align: top;
    //                     "
    //                   >
    //                     <div
    //                       style="
    //                         background-color: #ffffff;
    //                         height: 100%;
    //                         width: 100% !important;
    //                         border-radius: 10px;
    //                         -webkit-border-radius: 10px;
    //                         -moz-border-radius: 10px;
    //                         box-shadow: 0 0 18px rgba(0, 0, 0, 0.1);
    //                       "
    //                     >
    //                       <!--[if (!mso)&(!IE)]><!-->
    //                       <div
    //                         style="
    //                           box-sizing: border-box;
    //                           height: 100%;
    //                           padding: 0px;
    //                           border-top: 0px solid transparent;
    //                           border-left: 0px solid transparent;
    //                           border-right: 0px solid transparent;
    //                           border-bottom: 0px solid transparent;
    //                           border-radius: 0px;
    //                           -webkit-border-radius: 0px;
    //                           -moz-border-radius: 0px;
    //                         "
    //                       >
    //                         <!--<![endif]-->

    //                         <table
    //                           id="u_content_heading_1"
    //                           style="font-family: arial, helvetica, sans-serif"
    //                           role="presentation"
    //                           cellpadding="0"
    //                           cellspacing="0"
    //                           width="100%"
    //                           border="0"
    //                         >
    //                           <tbody>
    //                             <tr>
    //                               <td
    //                                 class="v-container-padding-padding"
    //                                 style="
    //                                   overflow-wrap: break-word;
    //                                   word-break: break-word;
    //                                   padding: 32px 32px 16px;
    //                                   font-family: arial, helvetica, sans-serif;
    //                                 "
    //                                 align="left"
    //                               >
    //                                 <h1
    //                                   class="v-font-size"
    //                                   style="
    //                                     margin: 0px;
    //                                     line-height: 140%;
    //                                     text-align: left;
    //                                     word-wrap: break-word;
    //                                     font-size: 20px;
    //                                     font-weight: 700;
    //                                   "
    //                                 >
    //                                   <span
    //                                     >Welcome come to feedbacksync!</span
    //                                   >
    //                                 </h1>
    //                               </td>
    //                             </tr>
    //                           </tbody>
    //                         </table>

    //                         <table
    //                           id="u_content_text_1"
    //                           style="font-family: arial, helvetica, sans-serif"
    //                           role="presentation"
    //                           cellpadding="0"
    //                           cellspacing="0"
    //                           width="100%"
    //                           border="0"
    //                         >
    //                           <tbody>
    //                             <tr>
    //                               <td
    //                                 class="v-container-padding-padding"
    //                                 style="
    //                                   overflow-wrap: break-word;
    //                                   word-break: break-word;
    //                                   padding: 0px 32px 24px;
    //                                   font-family: arial, helvetica, sans-serif;
    //                                 "
    //                                 align="left"
    //                               >
    //                                 <div
    //                                   class="v-font-size"
    //                                   style="
    //                                     font-size: 16px;
    //                                     line-height: 140%;
    //                                     text-align: left;
    //                                     word-wrap: break-word;
    //                                   "
    //                                 >
    //                                   <p style="line-height: 140%">
    //                                     <span style="line-height: 22.4px"
    //                                       >Hi ${name},<br /><br />Hope you're doing well! <br /><br />
    //                                       <div align="left">
    //                                       <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://app.feedbacksync.com/" style="height:37px; v-text-anchor:middle; width:157px;" arcsize="13.5%"  stroke="f" fillcolor="#4f46e5"><w:anchorlock/><center style="color:#FFFFFF;"><![endif]-->
    //                                       <a
    //                                         href="https://app.feedbacksync.com/"
    //                                         target="_blank"
    //                                         class="v-button v-size-width v-font-size"
    //                                         style="
    //                                           box-sizing: border-box;
    //                                           display: inline-block;
    //                                           text-decoration: none;
    //                                           -webkit-text-size-adjust: none;
    //                                           text-align: center;
    //                                           color: #ffffff;
    //                                           background-color: #4f46e5;
    //                                           border-radius: 5px;
    //                                           -webkit-border-radius: 5px;
    //                                           -moz-border-radius: 5px;
    //                                           width: 36%;
    //                                           max-width: 100%;
    //                                           overflow-wrap: break-word;
    //                                           word-break: break-word;
    //                                           word-wrap: break-word;
    //                                           mso-border-alt: none;
    //                                           font-size: 14px;
    //                                         "
    //                                       >
    //                                         <span
    //                                           style="
    //                                             display: block;
    //                                             padding: 10px 20px;
    //                                             line-height: 120%;
    //                                           "
    //                                           ><span style="line-height: 16.8px"
    //                                             >Log in</span
    //                                           ></span
    //                                         >
    //                                       </a>
    //                                       <!--[if mso]></center></v:roundrect><![endif]-->
    //                                     </div><br /><br />Once logged in, you can create, distribute, and analyze surveys.<br /><br />Let me know if you need any help.
    //                                       <br /><br />Best regards,<br />${company_name}</span
    //                                     >
    //                                   </p>
    //                                 </div>
    //                               </td>
    //                             </tr>
    //                           </tbody>
    //                         </table>

    //                         <!--[if (!mso)&(!IE)]><!-->
    //                       </div>
    //                       <!--<![endif]-->
    //                     </div>
    //                   </div>
    //                   <!--[if (mso)|(IE)]></td><![endif]-->
    //                   <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    //                 </div>
    //               </div>
    //             </div>

    //             <div
    //               class="u-row-container v-row-padding--vertical"
    //               style="
    //                 padding: 0px;
    //                 background-color: transparent;
    //                 margin-top: 24px;
    //               "
    //             >
    //               <div
    //                 class="u-row no-stack"
    //                 style="
    //                   margin: 0 auto;
    //                   min-width: 320px;
    //                   max-width: 500px;
    //                   overflow-wrap: break-word;
    //                   word-wrap: break-word;
    //                   word-break: break-word;
    //                   background-color: transparent;
    //                 "
    //               >
    //                 <div
    //                   style="
    //                     border-collapse: collapse;
    //                     display: table;
    //                     width: 100%;
    //                     height: 100%;
    //                     background-color: transparent;
    //                   "
    //                 >
    //                   <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->

    //                   <!--[if (mso)|(IE)]><td align="center" width="166" style="width: 166px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
    //                   <div
    //                     class="u-col u-col-33p33"
    //                     style="
    //                       max-width: 320px;
    //                       min-width: 166.67px;
    //                       display: table-cell;
    //                       vertical-align: top;
    //                     "
    //                   >
    //                     <div
    //                       style="
    //                         height: 100%;
    //                         width: 100% !important;
    //                         border-radius: 0px;
    //                         -webkit-border-radius: 0px;
    //                         -moz-border-radius: 0px;
    //                       "
    //                     >
    //                       <!--[if (!mso)&(!IE)]><!-->
    //                       <div
    //                         style="
    //                           box-sizing: border-box;
    //                           height: 100%;
    //                           padding: 0px;
    //                           border-top: 0px solid transparent;
    //                           border-left: 0px solid transparent;
    //                           border-right: 0px solid transparent;
    //                           border-bottom: 0px solid transparent;
    //                           border-radius: 0px;
    //                           -webkit-border-radius: 0px;
    //                           -moz-border-radius: 0px;
    //                         "
    //                       >
    //                         <!--<![endif]-->

    //                         <table
    //                           id="u_content_image_2"
    //                           style="font-family: arial, helvetica, sans-serif"
    //                           role="presentation"
    //                           cellpadding="0"
    //                           cellspacing="0"
    //                           width="100%"
    //                           border="0"
    //                         >
    //                           <tbody>
    //                             <tr>
    //                               <td
    //                                 class="v-container-padding-padding"
    //                                 style="
    //                                   overflow-wrap: break-word;
    //                                   word-break: break-word;
    //                                   padding: 10px;
    //                                   font-family: arial, helvetica, sans-serif;
    //                                 "
    //                                 align="left"
    //                               >
    //                                 <table
    //                                   width="100%"
    //                                   cellpadding="0"
    //                                   cellspacing="0"
    //                                   border="0"
    //                                 >
    //                                   <tr>
    //                                     <td
    //                                       style="
    //                                         padding-right: 0px;
    //                                         padding-left: 0px;
    //                                       "
    //                                       align="right"
    //                                     >
    //                                       <a
    //                                         href="https://twitter.com/feedbacksync"
    //                                         target="_blank"
    //                                       >
    //                                         <img
    //                                           align="right"
    //                                           border="0"
    //                                           src="https://feedbackuploadimage.s3.ap-south-1.amazonaws.com/X+svg.png"
    //                                           alt=""
    //                                           title=""
    //                                           style="
    //                                             outline: none;
    //                                             text-decoration: none;
    //                                             -ms-interpolation-mode: bicubic;
    //                                             clear: both;
    //                                             display: inline-block !important;
    //                                             border: none;
    //                                             height: auto;
    //                                             float: none;
    //                                             width: 16%;
    //                                             max-width: 23.47px;
    //                                           "
    //                                           width="23.47"
    //                                           class="v-src-width v-src-max-width"
    //                                         />
    //                                       </a>
    //                                     </td>
    //                                   </tr>
    //                                 </table>
    //                               </td>
    //                             </tr>
    //                           </tbody>
    //                         </table>

    //                         <!--[if (!mso)&(!IE)]><!-->
    //                       </div>
    //                       <!--<![endif]-->
    //                     </div>
    //                   </div>
    //                   <!--[if (mso)|(IE)]></td><![endif]-->
    //                   <!--[if (mso)|(IE)]><td align="center" width="166" style="width: 166px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
    //                   <div
    //                     class="u-col u-col-33p33"
    //                     style="
    //                       max-width: 320px;
    //                       min-width: 166.67px;
    //                       display: table-cell;
    //                       vertical-align: top;
    //                     "
    //                   >
    //                     <div
    //                       style="
    //                         height: 100%;
    //                         width: 100% !important;
    //                         border-radius: 0px;
    //                         -webkit-border-radius: 0px;
    //                         -moz-border-radius: 0px;
    //                       "
    //                     >
    //                       <!--[if (!mso)&(!IE)]><!-->
    //                       <div
    //                         style="
    //                           box-sizing: border-box;
    //                           height: 100%;
    //                           padding: 0px;
    //                           border-top: 0px solid transparent;
    //                           border-left: 0px solid transparent;
    //                           border-right: 0px solid transparent;
    //                           border-bottom: 0px solid transparent;
    //                           border-radius: 0px;
    //                           -webkit-border-radius: 0px;
    //                           -moz-border-radius: 0px;
    //                         "
    //                       >
    //                         <!--<![endif]-->

    //                         <table
    //                           id="u_content_image_3"
    //                           style="font-family: arial, helvetica, sans-serif"
    //                           role="presentation"
    //                           cellpadding="0"
    //                           cellspacing="0"
    //                           width="100%"
    //                           border="0"
    //                         >
    //                           <tbody>
    //                             <tr>
    //                               <td
    //                                 class="v-container-padding-padding"
    //                                 style="
    //                                   overflow-wrap: break-word;
    //                                   word-break: break-word;
    //                                   padding: 10px;
    //                                   font-family: arial, helvetica, sans-serif;
    //                                 "
    //                                 align="left"
    //                               >
    //                                 <table
    //                                   width="100%"
    //                                   cellpadding="0"
    //                                   cellspacing="0"
    //                                   border="0"
    //                                 >
    //                                   <tr>
    //                                     <td
    //                                       style="
    //                                         padding-right: 0px;
    //                                         padding-left: 0px;
    //                                       "
    //                                       align="center"
    //                                     >
    //                                       <a
    //                                         href="https://www.facebook.com/feedbacksync"
    //                                         target="_blank"
    //                                       >
    //                                         <img
    //                                           align="center"
    //                                           border="0"
    //                                           src="https://feedbackuploadimage.s3.ap-south-1.amazonaws.com/facebook.png"
    //                                           alt=""
    //                                           title=""
    //                                           style="
    //                                             outline: none;
    //                                             text-decoration: none;
    //                                             -ms-interpolation-mode: bicubic;
    //                                             clear: both;
    //                                             display: inline-block !important;
    //                                             border: none;
    //                                             height: auto;
    //                                             float: none;
    //                                             width: 16%;
    //                                             max-width: 23.47px;
    //                                           "
    //                                           width="23.47"
    //                                           class="v-src-width v-src-max-width"
    //                                         />
    //                                       </a>
    //                                     </td>
    //                                   </tr>
    //                                 </table>
    //                               </td>
    //                             </tr>
    //                           </tbody>
    //                         </table>

    //                         <!--[if (!mso)&(!IE)]><!-->
    //                       </div>
    //                       <!--<![endif]-->
    //                     </div>
    //                   </div>
    //                   <!--[if (mso)|(IE)]></td><![endif]-->
    //                   <!--[if (mso)|(IE)]><td align="center" width="166" style="width: 166px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
    //                   <div
    //                     class="u-col u-col-33p33"
    //                     style="
    //                       max-width: 320px;
    //                       min-width: 166.67px;
    //                       display: table-cell;
    //                       vertical-align: top;
    //                     "
    //                   >
    //                     <div
    //                       style="
    //                         height: 100%;
    //                         width: 100% !important;
    //                         border-radius: 0px;
    //                         -webkit-border-radius: 0px;
    //                         -moz-border-radius: 0px;
    //                       "
    //                     >
    //                       <!--[if (!mso)&(!IE)]><!-->
    //                       <div
    //                         style="
    //                           box-sizing: border-box;
    //                           height: 100%;
    //                           padding: 0px;
    //                           border-top: 0px solid transparent;
    //                           border-left: 0px solid transparent;
    //                           border-right: 0px solid transparent;
    //                           border-bottom: 0px solid transparent;
    //                           border-radius: 0px;
    //                           -webkit-border-radius: 0px;
    //                           -moz-border-radius: 0px;
    //                         "
    //                       >
    //                         <!--<![endif]-->

    //                         <table
    //                           id="u_content_image_4"
    //                           style="font-family: arial, helvetica, sans-serif"
    //                           role="presentation"
    //                           cellpadding="0"
    //                           cellspacing="0"
    //                           width="100%"
    //                           border="0"
    //                         >
    //                           <tbody>
    //                             <tr>
    //                               <td
    //                                 class="v-container-padding-padding"
    //                                 style="
    //                                   overflow-wrap: break-word;
    //                                   word-break: break-word;
    //                                   padding: 10px;
    //                                   font-family: arial, helvetica, sans-serif;
    //                                 "
    //                                 align="left"
    //                               >
    //                                 <table
    //                                   width="100%"
    //                                   cellpadding="0"
    //                                   cellspacing="0"
    //                                   border="0"
    //                                 >
    //                                   <tr>
    //                                     <td
    //                                       style="
    //                                         padding-right: 0px;
    //                                         padding-left: 0px;
    //                                       "
    //                                       align="left"
    //                                     >
    //                                       <a
    //                                         href="https://www.instagram.com/feedbacksync"
    //                                         target="_blank"
    //                                       >
    //                                         <img
    //                                           align="left"
    //                                           border="0"
    //                                           src="https://feedbackuploadimage.s3.ap-south-1.amazonaws.com/instagram.png"
    //                                           alt=""
    //                                           title=""
    //                                           style="
    //                                             outline: none;
    //                                             text-decoration: none;
    //                                             -ms-interpolation-mode: bicubic;
    //                                             clear: both;
    //                                             display: inline-block !important;
    //                                             border: none;
    //                                             height: auto;
    //                                             float: none;
    //                                             width: 16%;
    //                                             max-width: 23.47px;
    //                                           "
    //                                           width="23.47"
    //                                           class="v-src-width v-src-max-width"
    //                                         />
    //                                       </a>
    //                                     </td>
    //                                   </tr>
    //                                 </table>
    //                               </td>
    //                             </tr>
    //                           </tbody>
    //                         </table>

    //                         <!--[if (!mso)&(!IE)]><!-->
    //                       </div>
    //                       <!--<![endif]-->
    //                     </div>
    //                   </div>
    //                   <!--[if (mso)|(IE)]></td><![endif]-->
    //                   <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    //                 </div>
    //               </div>
    //             </div>

    //             <div
    //               class="u-row-container v-row-padding--vertical"
    //               style="
    //                 padding: 0px;
    //                 background-color: #e8e8e8;
    //                 border-bottom: 12px solid #4f46e5;
    //               "
    //             >
    //               <div
    //                 class="u-row"
    //                 style="
    //                   margin: 0 auto;
    //                   min-width: 320px;
    //                   max-width: 500px;
    //                   overflow-wrap: break-word;
    //                   word-wrap: break-word;
    //                   word-break: break-word;
    //                   background-color: transparent;
    //                 "
    //               >
    //                 <div
    //                   style="
    //                     border-collapse: collapse;
    //                     display: table;
    //                     width: 100%;
    //                     height: 100%;
    //                     background-color: transparent;
    //                   "
    //                 >
    //                   <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #e8e8e8;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->

    //                   <!--[if (mso)|(IE)]><td align="center" width="500" style="width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
    //                   <div
    //                     class="u-col u-col-100"
    //                     style="
    //                       max-width: 320px;
    //                       min-width: 500px;
    //                       display: table-cell;
    //                       vertical-align: top;
    //                     "
    //                   >
    //                     <div
    //                       style="
    //                         height: 100%;
    //                         width: 100% !important;
    //                         border-radius: 0px;
    //                         -webkit-border-radius: 0px;
    //                         -moz-border-radius: 0px;
    //                       "
    //                     >
    //                       <!--[if (!mso)&(!IE)]><!-->
    //                       <div
    //                         style="
    //                           box-sizing: border-box;
    //                           height: 100%;
    //                           padding: 0px;
    //                           border-top: 0px solid transparent;
    //                           border-left: 0px solid transparent;
    //                           border-right: 0px solid transparent;
    //                           border-bottom: 0px solid transparent;
    //                           border-radius: 0px;
    //                           -webkit-border-radius: 0px;
    //                           -moz-border-radius: 0px;
    //                         "
    //                       >
    //                         <!--<![endif]-->

    //                         <table
    //                           style="font-family: arial, helvetica, sans-serif"
    //                           role="presentation"
    //                           cellpadding="0"
    //                           cellspacing="0"
    //                           width="100%"
    //                           border="0"
    //                         >
    //                           <tbody>
    //                             <tr>
    //                               <td
    //                                 class="v-container-padding-padding"
    //                                 style="
    //                                   overflow-wrap: break-word;
    //                                   word-break: break-word;
    //                                   padding: 16px 16px 8px;
    //                                   font-family: arial, helvetica, sans-serif;
    //                                 "
    //                                 align="left"
    //                               >
    //                                 <h2
    //                                   class="v-font-size"
    //                                   style="
    //                                     margin: 0px;
    //                                     line-height: 140%;
    //                                     text-align: center;
    //                                     word-wrap: break-word;
    //                                     font-size: 16px;
    //                                     font-weight: 400;
    //                                   "
    //                                 >
    //                                   <a
    //                                     href="https://www.feedbacksync.com"
    //                                     target="_blank"
    //                                   >
    //                                     <span>www.feedbacksync.com</span>
    //                                   </a>
    //                                 </h2>
    //                               </td>
    //                             </tr>
    //                           </tbody>
    //                         </table>

    //                         <table
    //                           style="font-family: arial, helvetica, sans-serif"
    //                           role="presentation"
    //                           cellpadding="0"
    //                           cellspacing="0"
    //                           width="100%"
    //                           border="0"
    //                         >
    //                           <tbody>
    //                             <tr>
    //                               <td
    //                                 class="v-container-padding-padding"
    //                                 style="
    //                                   overflow-wrap: break-word;
    //                                   word-break: break-word;
    //                                   padding: 0px 32px 14px;
    //                                   font-family: arial, helvetica, sans-serif;
    //                                 "
    //                                 align="left"
    //                               >
    //                               <div
    //                               class="v-font-size"
    //                               style="
    //                                 font-size: 14px;
    //                                 line-height: 140%;
    //                                 text-align: center;
    //                                 word-wrap: break-word;                                  
    //                               "
    //                             >
    //                               <p style="line-height: 140%;">
    //                                 <span style="line-height: 19.6px"
    //                                   ><span style="line-height: 19.6px">
    //                                     No 68, Mahadevan Street, Westmambalam,
    //                                     T. Nagar, Chennai, Tamil Nadu
    //                                     600018</span
    //                                   > </span
    //                                 >
    //                               </p>
    //                             </div>
    //                               </td>
    //                             </tr>
    //                           </tbody>
    //                         </table>

    //                         <table
    //                           style="font-family: arial, helvetica, sans-serif"
    //                           role="presentation"
    //                           cellpadding="0"
    //                           cellspacing="0"
    //                           width="100%"
    //                           border="0"
    //                         >
    //                           <tbody>
    //                             <tr>
    //                               <td
    //                                 class="v-container-padding-padding"
    //                                 style="
    //                                   overflow-wrap: break-word;
    //                                   word-break: break-word;
    //                                   padding: 10px;
    //                                   font-family: arial, helvetica, sans-serif;
    //                                 "
    //                                 align="left"
    //                               >
    //                                 <table
    //                                   width="100%"
    //                                   cellpadding="0"
    //                                   cellspacing="0"
    //                                   border="0"
    //                                 >
    //                                   <tr>
    //                                     <td
    //                                       style="
    //                                         padding-right: 0px;
    //                                         padding-left: 0px;
    //                                       "
    //                                       align="center"
    //                                     >
    //                                       <a
    //                                         href="https://www.feedbacksync.com"
    //                                         target="_blank"
    //                                       >
    //                                         <img
    //                                           align="center"
    //                                           border="0"
    //                                           src="https://feedbackuploadimage.s3.ap-south-1.amazonaws.com/FeedbackBrand.png"
    //                                           alt=""
    //                                           title=""
    //                                           style="
    //                                             outline: none;
    //                                             text-decoration: none;
    //                                             -ms-interpolation-mode: bicubic;
    //                                             clear: both;
    //                                             display: inline-block !important;
    //                                             border: none;
    //                                             height: auto;
    //                                             float: none;
    //                                             max-width: 240px;
    //                                             padding-bottom: 16px;
    //                                           "
    //                                           class="v-src-width v-src-max-width"
    //                                         />
    //                                       </a>
    //                                     </td>
    //                                   </tr>
    //                                 </table>
    //                               </td>
    //                             </tr>
    //                           </tbody>
    //                         </table>

    //                         <!--[if (!mso)&(!IE)]><!-->
    //                       </div>
    //                       <!--<![endif]-->
    //                     </div>
    //                   </div>
    //                   <!--[if (mso)|(IE)]></td><![endif]-->
    //                   <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    //                 </div>
    //               </div>
    //             </div>

    //             <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
    //           </td>
    //         </tr>
    //       </tbody>
    //     </table>
    //     <!--[if mso]></div><![endif]-->
    //     <!--[if IE]></div><![endif]-->
    //   </body>
    // </html>


    // `;
};