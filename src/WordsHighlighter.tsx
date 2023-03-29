import { Component, ReactNode, createElement } from "react";
import { WordHighlighterInput } from "./components/WordsHighlighterInput";
import { WordsHighlighterProps } from "../typings/WordsHighlighterProps";
import { TextStyle, ViewStyle } from "react-native";

import { Style } from "@mendix/pluggable-widgets-tools";
export interface CustomStyle extends Style {
  container: ViewStyle;
  label: TextStyle;
}
export class WordsHighlighter extends Component<WordsHighlighterProps<CustomStyle>> {
    render(): ReactNode {
      const autoEscape=this.props.autoescapekey;
      const  highlightStyleBackgroundColor=this.props.highlightStyleBackgroundColorKey?.value || "yellow"
      const searchwordsvalue=this.props.searchwordskey.value || "";
      const searchWords = searchwordsvalue.split(/\s/).filter(word => word);
      const textToHighlight=this.props.textToHighlightkey.value || "";

        return <WordHighlighterInput
        autoEscape={autoEscape}
        highlightBackgroundColor={highlightStyleBackgroundColor}
        searchWords={searchWords}
        textToHighlight={textToHighlight}
      />
    }
}
