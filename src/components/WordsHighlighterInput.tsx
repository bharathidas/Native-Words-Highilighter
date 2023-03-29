import { Component, ReactNode, createElement } from "react";
import Highlighter from 'react-native-highlight-words';

export interface WordHighlighterProps {
   
    highlightBackgroundColor?:string;
    searchWords: string[];
    autoEscape?:boolean;
    textToHighlight: string;

}


export class WordHighlighterInput extends Component<WordHighlighterProps> {
   
    render(): ReactNode {
        const backgroundValue=this.props.highlightBackgroundColor
        var bgval=backgroundValue?.replace(/"/g, "'");
        if (bgval!=undefined){
            bgval=bgval.toLowerCase();
        }
        return <Highlighter
        autoEscape={this.props.autoEscape}
        highlightStyle={{backgroundColor: bgval}}
        searchWords={this.props.searchWords}
        textToHighlight={this.props.textToHighlight}
      />;

 }
}
