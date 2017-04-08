import * as angular from 'angular';
import MarkdownEditorComponent from './editor.component';
import MarkdownEditorController from './editor.controller';
import MarkdownProvider from './markdown.provider';
import MarkdownPreview from './preview.directive';

require('./style.scss');

export default angular.module('markdown', [])
   .provider('marked', MarkdownProvider)
   .directive('markdown', MarkdownPreview)
   .controller('MarkdownController', MarkdownEditorController)
   .component('markdownEditor', MarkdownEditorComponent);
