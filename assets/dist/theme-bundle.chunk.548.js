"use strict";(self.webpackChunkpapathemes_kitchenary=self.webpackChunkpapathemes_kitchenary||[]).push([[548],{52548:(t,e,a)=>{a.r(e),a.d(e,{default:()=>m});var r=a(72488),i=a(21340),o=a(40097),s=a(58354),n=a(73609),l=a(67313),d=a(99706),c=a(55825);function p(t,e){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},p(t,e)}var m=function(t){var e,a;function r(e){var a;return(a=t.call(this,e)||this).validationDictionary=(0,d.M)(e),a.formCreateSelector="form[data-create-account-form]",a.recaptcha=c(".g-recaptcha iframe[src]"),a}a=t,(e=r).prototype=Object.create(a.prototype),e.prototype.constructor=e,p(e,a);var m=r.prototype;return m.registerLoginValidation=function(t){var e=this,a=n.Z;this.loginValidator=(0,o.Z)({submit:'.login-form input[type="submit"]',tap:l.kk}),this.loginValidator.add([{selector:'.login-form input[name="login_email"]',validate:function(t,e){t(a.email(e))},errorMessage:this.context.useValidEmail},{selector:'.login-form input[name="login_pass"]',validate:function(t,e){t(a.password(e))},errorMessage:this.context.enterPass}]),t.on("submit",(function(t){e.loginValidator.performCheck(),e.loginValidator.areAll("valid")||t.preventDefault()}))},m.registerForgotPasswordValidation=function(t){var e=this;this.forgotPasswordValidator=(0,o.Z)({submit:'.forgot-password-form input[type="submit"]',tap:l.kk}),this.forgotPasswordValidator.add([{selector:'.forgot-password-form input[name="email"]',validate:function(t,e){t(n.Z.email(e))},errorMessage:this.context.useValidEmail}]),t.on("submit",(function(t){e.forgotPasswordValidator.performCheck(),e.forgotPasswordValidator.areAll("valid")||t.preventDefault()}))},m.registerNewPasswordValidation=function(){var t=this.validationDictionary,e=t.password,a=t.password_match,r=".new-password-form",i=(0,o.Z)({submit:c(r+' input[type="submit"]'),tap:l.kk}),s=c(r+' input[name="password"]'),n=c(r+' input[name="password_confirm"]'),d=(0,l.Ek)(e,e,a,this.passwordRequirements.error);l.kI.setPasswordValidation(i,s,n,this.passwordRequirements,d)},m.registerCreateAccountValidator=function(t){var e,a=this,r=(0,s.Z)(t,this.context),n=(0,o.Z)({submit:this.formCreateSelector+" input[type='submit']",tap:l.kk}),d=c('[data-field-type="State"]'),p=this.formCreateSelector+" [data-field-type='EmailAddress']",m=c(p),u=this.formCreateSelector+" [data-field-type='Password']",f=c(u),h=this.formCreateSelector+" [data-field-type='ConfirmPassword']",g=c(h);if(n.add(r),d&&(0,i.Z)(d,this.context,(function(t,r){if(t)throw new Error(t);var i=c(r);"undefined"!==n.getStatus(d)&&n.remove(d),e&&n.remove(e),i.is("select")?(e=r,l.kI.setStateCountryValidation(n,r,a.validationDictionary.field_not_blank)):l.kI.cleanUpStateValidation(r)})),m&&(n.remove(p),l.kI.setEmailValidation(n,p,this.validationDictionary.valid_email)),f&&g){var w=this.validationDictionary,v=w.password,k=w.password_match;n.remove(u),n.remove(h),l.kI.setPasswordValidation(n,u,h,this.passwordRequirements,(0,l.Ek)(v,v,k,this.passwordRequirements.error))}t.on("submit",(function(t){n.performCheck(),n.areAll("valid")||t.preventDefault()}))},m.onReady=function(){this.recaptcha.attr("title")||this.recaptcha.attr("title",this.context.recaptchaTitle);var t=(0,l.iR)(this.formCreateSelector),e=(0,l.iR)(".login-form"),a=(0,l.iR)(".forgot-password-form"),r=(0,l.iR)(".new-password-form");this.passwordRequirements=this.context.passwordRequirements,e.length&&this.registerLoginValidation(e),r.length&&this.registerNewPasswordValidation(),a.length&&this.registerForgotPasswordValidation(a),t.length&&this.registerCreateAccountValidator(t)},r}(r.Z)}}]);
//# sourceMappingURL=theme-bundle.chunk.548.js.map