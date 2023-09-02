import { useState } from 'react';
import ReactQuill from 'react-quill';

import './index.scss';

const QuillEditor = () => {
  const [value, setValue] = useState('');

  // 剩下参数 delta: DeltaStatic, source: Sources, editor: ReactQuill.UnprivilegedEditor
  const handleChangeValue = (value: string) => {
    console.log('富文本的值：', value);
    setValue(value);
  };

  //配置编辑器组件
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['link', 'image']
      //   ['clean']
    ]
  };

  // 配置编辑器格式化文本的形式
  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image'
  ];

  return (
    <div className="react-quill-wrap">
      <div className="quill-editor-wrap">
        <ReactQuill theme="snow" value={value} modules={modules} formats={formats} onChange={handleChangeValue} />
      </div>
    </div>
  );
};

export default QuillEditor;
