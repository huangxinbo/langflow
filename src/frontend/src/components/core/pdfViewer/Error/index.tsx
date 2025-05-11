import {
  PDFCheckFlow,
  PDFLoadErrorTitle,
} from "../../../../constants/constants";
import ForwardedIconComponent from "../../../common/genericIconComponent";

export default function Error(): JSX.Element {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-muted">
      <div className="chat-alert-box">
        <span className="flex gap-2">
          <ForwardedIconComponent name="FileX2" />
          <span className="langflow-chat-span">{PDFLoadErrorTitle}</span>
        </span>
        <br />
        <div className="langflow-chat-desc">
          <span className="langflow-chat-desc-span">{PDFCheckFlow} </span>
        </div>
      </div>
    </div>
  );
}
