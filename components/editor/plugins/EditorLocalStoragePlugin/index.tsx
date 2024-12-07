// components/editor/plugins/EditorLocalStoragePlugin.tsx
import { useEffect } from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

const LOCAL_STORAGE_KEY = 'editor-content';

export function EditorLocalStoragePlugin(): null {
    const [editor] = useLexicalComposerContext();

    useEffect(() => {
        const savedContent = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (savedContent) {
            const parsedState = JSON.parse(savedContent);
            editor.setEditorState(editor.parseEditorState(parsedState));
        }
    }, [editor]);

    useEffect(() => {
        return editor.registerUpdateListener(
            ({ editorState }) => {
                const editorStateJSON = JSON.stringify(
                    editorState.toJSON()
                );
                localStorage.setItem(LOCAL_STORAGE_KEY, editorStateJSON);
            }
        );
    }, [editor]);

    return null;
}