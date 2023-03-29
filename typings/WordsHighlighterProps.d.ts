/**
 * This file was generated from WordsHighlighter.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";

export interface WordsHighlighterProps<Style> {
    name: string;
    style: Style[];
    searchwordskey: EditableValue<string>;
    textToHighlightkey: EditableValue<string>;
    highlightStyleBackgroundColorKey?: EditableValue<string>;
    autoescapekey: boolean;
}

export interface WordsHighlighterPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    searchwordskey: string;
    textToHighlightkey: string;
    highlightStyleBackgroundColorKey: string;
    autoescapekey: boolean;
}
