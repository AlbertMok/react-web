import { NodeViewWrapper } from '@tiptap/react';
import './style.scss';
export const Component = (props: any) => {
  const increase = () => {
    props.updateAttributes({
      count: props.node.attrs.count + 1
    });
  };

  return (
    <NodeViewWrapper className="react-component">
      <span className="label">React Component</span>
      <div className="content">
        <button onClick={increase}>This button has been clicked {props.node.attrs.count} times.</button>
      </div>
    </NodeViewWrapper>
  );
};
