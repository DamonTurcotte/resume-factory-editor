import React from "react";
import { editorHtml } from "resume-factory-editor-web";
import { WebView, type WebViewProps } from "react-native-webview";

interface TextEditorProps extends WebViewProps {
  _DEV_?: boolean | false;
}

export const TextEditor = ({
  _DEV_ = false,
  ...props
}: TextEditorProps) => {

  return (
    <WebView
      {...props}
      originWhitelist={["*"]}
      source={_DEV_ ? { uri: "http://10.0.0.222:3000"} : { html: editorHtml }}
      style={{ flex: 1 }}
      scalesPageToFit={false}
    />
  )
};

export default TextEditor;