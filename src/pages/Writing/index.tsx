function Writing() {
  return (
    <div className="container" style={{ padding: '40px', boxSizing: 'border-box' }}>
      asdas
    </div>
  );
}

export default Writing;

import type { Editor } from '@tiptap/core';
import type { Level } from '@tiptap/extension-heading';
import TiptapHeading from '@tiptap/extension-heading';
import CommandButton from '../components/Commands/CommandButton.vue';
import { VueNodeViewRenderer } from '@tiptap/vue-3';
import NodeViewSideToolBar from '../components/NodeView/NodeViewSideToolBar.vue';

function mapLevelToIcon(level: any) {
  switch (level) {
    case 1:
      return { icon: 'i-ri-h-1', title: 'h1' };
    case 2:
      return { icon: 'i-ri-h-2', title: 'h2' };
    case 3:
      return { icon: 'i-ri-h-3', title: 'h3' };
    case 4:
      return { icon: 'i-ri-h-4', title: 'h4' };
    case 5:
      return { icon: 'i-ri-h-5', title: 'h5' };
    case 6:
      return { icon: 'i-ri-h-6', title: 'h6' };
    default:
      return { icon: 'i-ri-text', title: 'text' };
  }
}

const Heading = TiptapHeading.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      menuButton({
        editor,
        level,
        nodeViewProps
      }: {
        editor: Editor;
        t: (...args: any[]) => string;
        level: number;
        nodeViewProps: object;
      }) {
        return {
          component: CommandButton,
          componentProps: {
            editor,
            command: (level: Level) => {
              if (level > 0) {
                editor.commands.setHeading({ level: level });
              } else {
                (editor.commands as any).setParagraph();
              }
            },
            isActive: ((level: number) => {
              if (nodeViewProps?.node) {
                if (nodeViewProps.node.attrs.level) {
                  return nodeViewProps.node.type.name === 'heading' && nodeViewProps.node.attrs.level === level;
                } else {
                  return level === 0;
                }
              }
              let currentLevel = editor.getAttributes('heading').level;
              if (currentLevel === undefined) {
                currentLevel = 0;
              }
              return currentLevel === level;
            })(level),
            icon: mapLevelToIcon(level).icon,
            tooltip: mapLevelToIcon(level).title,
            cmdPara: level
          }
        };
      },
      category: 'heading',
      ary: [
        { level: 0, icon: 'i-ri-text', title: 'text' },
        { level: 1, icon: 'i-ri-h-1', title: '1' },
        { level: 2, icon: 'i-ri-h-2', title: '2' },
        { level: 3, icon: 'i-ri-h-3', title: '3' },
        { level: 4, icon: 'i-ri-h-4', title: '4' },
        { level: 5, icon: 'i-ri-h-5', title: '5' },
        { level: 6, icon: 'i-ri-h-6', title: '6' }
      ]
    };
  },
  addNodeView() {
    return VueNodeViewRenderer(NodeViewSideToolBar);
  }
});


<template>
  <node-view-wrapper>
    <tippy
        ref="tippyInstance"
        arrow
        interactive
        :hide-on-click="false"
        placement = 'left'
        theme="sidebar-bubble-toolbar"
        :inertia="true"
    >
      <template #default>
        <node-view-content
            :as="`h${props.node.attrs.level}`"
            @mouseover="handleMouseOver"
            :class="{ 'hover-background': isHovered,'extended-mouse-area':true }"
            :style="{ textAlign: props.node.attrs.textAlign }"
        />
      </template>
      <template #content>
        <tippy
            contenteditable="false"
            arrow
            interactive
            :hide-on-click="false"
            :inertia="true"
            placement = "left"
            theme="sidebar-bubble-toolbar"
            animation="shift-away"
            :duration="[450, 250]"
            :onMount = "handleHoverStart"
            :onUntrigger = "handleHoverEnd"
        >
          <template #default>
            <div  class="hover-container">
              <div v-if="isParagraph" style="display:flex;flex-direction: row;justify-content: center;hover:bg-gray-100">
                <div  :class="['i-ri-text','w-[20px]','h-[20px]','bg-black']"></div>
                <div  :class="['i-ri-draggable','w-[20px]','h-[20px]','bg-black']"></div>
              </div>
              <div v-else-if="isHeading" style="display:flex;flex-direction: row;justify-content: center;hover:bg-gray-100">
                <div  :class="[`i-ri-h-${props.node.attrs.level}`,'w-[20px]','h-[20px]','bg-black']"></div>
                <div  :class="['i-ri-draggable','w-[20px]','h-[20px]','bg-black']"></div>
              </div>
              <div v-else-if="isEmptyLine">
                <div  :class="['i-ri-add-line','w-[20px]','h-[20px]','bg-black']"></div>
              </div>
              <div v-else>Other type: {{ props.node.type.name }}</div>
            </div>
          </template>
          <template #content>
            <side-tool-bar
                :hide-button-list="['history','bold','italic','underline','strike']"
                 style="border: 0px solid blue;padding: 0;"
                 :editor="editor"
                 :posFrom="posFrom"
                 :nodeViewProps="props"
                 :categoryOrder="['heading','text-align','mark']"/>
          </template>
        </tippy>
      </template>
    </tippy>
  </node-view-wrapper>
</template>

<script setup lang="ts">
import { NodeViewContent, NodeViewWrapper, nodeViewProps } from '@tiptap/vue-3'
import {computed, ref, onMounted, onBeforeUnmount} from 'vue'
import SideToolBar from "../ToolBar/SideToolBar.vue";
const props = defineProps(nodeViewProps)
const isParagraph = computed(() => props.node.type.name === 'paragraph' && props.node.textContent.trim() !== '')
const isHeading = computed(() => props.node.type.name === 'heading')
const isEmptyLine = computed(() => props.node.textContent.trim() === '')
const posFrom = ref(null)
const handleMouseOver = () => {
  posFrom.value = props.getPos()
}
const isHovered = ref(false)
const elementTag = computed(() => isParagraph.value || isEmptyLine.value ? 'p' : `h${props.node.attrs.level}`)
const handleHoverStart = () => {
  isHovered.value = true
}
const handleHoverEnd = () => {
  isHovered.value = false
}
const tippyInstance = ref(null)

onMounted(() => {
  document.addEventListener('keydown', handleKeyDown, true);
})

const handleKeyDown = () => {
  tippyInstance.value.hide()
}
onBeforeUnmount( () => {
  document.removeEventListener('keydown', handleKeyDown, true);
})
</script>

<style scoped>
.extended-mouse-area::before {
  content: '';
  width: 10%;  /* or however much you want to extend */
  height: 100%;
  position: absolute;
  left: -10%;  /* adjust this to match the width */
  pointer-events: auto;  /* make the pseudo-element receive mouse events */
}

.hover-container {
  border: 1px solid gainsboro;
  padding: 0;
  border-radius: 5px;
  padding: 3px 3px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.hover-container:hover {
  background-color: #f0f0f0;
}

.hover-background {
  --un-bg-opacity: 1;
  background-color: rgba(239,246,255,var(--un-bg-opacity));
}
</style>
