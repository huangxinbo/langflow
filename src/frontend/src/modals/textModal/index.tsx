import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-twilight";
// import "ace-builds/webpack-resolver";
import { useState } from "react";
import ForwardedIconComponent from "../../components/common/genericIconComponent";
import { Button } from "../../components/ui/button";
import BaseModal from "../baseModal";
import TextEditorArea from "./components/textEditorArea";

export default function TextModal({
  children,
  value,
  setValue,
  editable = false,
}: {
  children: JSX.Element;
  value: string;
  setValue: (value: string) => void;
  editable?: boolean;
}): JSX.Element {
  const [open, setOpen] = useState(false);
  const [internalValue, setInternalValue] = useState(value);

  const handleEscapeKeyDown = (event: KeyboardEvent) => {
    setOpen(false);
    event.stopPropagation();
  };

  return (
    <BaseModal
      size="medium-h-full"
      open={open}
      setOpen={setOpen}
      onEscapeKeyDown={handleEscapeKeyDown}
    >
      <BaseModal.Trigger className="h-full">{children}</BaseModal.Trigger>
      <BaseModal.Header description={""}>
        <span className="pr-2">View Text</span>
        <ForwardedIconComponent
          name="Type"
          className="h-6 w-6 pl-1 text-primary"
          aria-hidden="true"
        />
      </BaseModal.Header>
      <BaseModal.Content>
        <div className="flex h-full w-full flex-col transition-all">
          <div className="h-[370px]">
            <TextEditorArea
              readonly={!editable}
              onChange={(text) => setInternalValue(text)}
              value={internalValue}
              resizable={false}
              left={false}
            />
          </div>
        </div>
      </BaseModal.Content>
      <BaseModal.Footer>
        <div className="flex w-full justify-end gap-2 pt-2">
          {editable && (
            <Button
              className="flex gap-2 px-3"
              onClick={() => {
                setValue(internalValue);
                setOpen(false);
              }}
            >
              Save
            </Button>
          )}
        </div>
      </BaseModal.Footer>
    </BaseModal>
  );
}
