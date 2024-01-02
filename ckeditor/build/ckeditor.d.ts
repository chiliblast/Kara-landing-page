/**
 * @license Copyright (c) 2014-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { InlineEditor } from '@ckeditor/ckeditor5-editor-inline';
import type { EditorConfig } from '@ckeditor/ckeditor5-core';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { AutoImage, Image, ImageInsert, ImageUpload } from '@ckeditor/ckeditor5-image';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { Undo } from '@ckeditor/ckeditor5-undo';
import { Base64UploadAdapter } from '@ckeditor/ckeditor5-upload';
declare class Editor extends InlineEditor {
    static builtinPlugins: (typeof AutoImage | typeof Base64UploadAdapter | typeof Essentials | typeof Image | typeof ImageInsert | typeof ImageUpload | typeof Paragraph | typeof Undo)[];
    static defaultConfig: EditorConfig;
}
export default Editor;
