import React from 'react'
import AceEditor from 'react-ace'
import 'ace-builds/src-noconflict/mode-java'
import 'ace-builds/src-noconflict/theme-github'
import 'ace-builds/webpack-resolver'

const Editor = ({
  height,
  width,
  text,
  setText
}) => {
  return (
    <AceEditor
      className='rounded-xl shadow-xl border-2 border-green-400'
      width={`${width - 50}px`}
      height={`${(height / 2) - 50}px`}
      mode='javascript'
      theme='solarized_dark'
      onChange={setText}
      onLoad={(editor) => {
        editor.container.style.resize = 'both'
        editor.commands.on('exec', (e) => {
          const rowCol = editor.selection.getCursor()
          if ((rowCol.row === 0) || (rowCol.row === 1) || ((rowCol.row + 1) === editor.session.getLength())) {
            e.preventDefault()
            e.stopPropagation()
          }
        })
      }}
      fontSize={width < 640 ? 20 : width < 1000 ? 25 : 30}
      showPrintMargin
      showGutter
      highlightActiveLine
      value={text}
      enableBasicAutocompletion={false}
      enableLiveAutocompletion={false}
      enableSnippets={false}
      setOptions={{
        showLineNumbers: true,
        tabSize: 2
      }}
    />
  )
}

export default Editor
