/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	config.extraPlugins = 'quicktable';
	config.resize_enabled = false;
	
	config.toolbar = [
       //['Source','-','Save','NewPage','Preview','-','Templates'],
       ['Cut','Copy','Paste','PasteText','PasteFromWord'],
       ['Undo','Redo','-','SelectAll','RemoveFormat'],//,'-','Find','Replace'尋找/取代
       //['Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField'],//表單選項
       ['Link','Unlink'],
       ['NumberedList','BulletedList','-','Outdent','Indent','Blockquote'],
       ['Bold','Italic','Underline','Strike','-','Subscript','Superscript'],
       ['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
       ['Table','HorizontalRule'],
       ['TextColor','BGColor','FontSize'],//'Image',,'Smiley','SpecialChar','PageBreak'
       ['Styles','Format','Font'],
       
       
       //['Glyphicons','btquicktable']
    ];
};
