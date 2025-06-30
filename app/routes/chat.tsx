import { toast } from "sonner";
import { PromptSuggestions } from "~/components/ui/prompt-suggestions";
import { MessageInput } from "~/components/ui/message-input";
import { useState } from "react";

export default function ChatHome() {
  const [prompt, setPrompt] = useState<string>("");
  const [pending, setPending] = useState<boolean>(false);
  return (
    <div>
      <PromptSuggestions
        label="Try the following prompts:"
        append={(message) => {
          alert(`Clicked ${JSON.stringify(message)}`);
        }}
        suggestions={[
          "What is the weather like today?",
          "Tell me a joke.",
          "What is the capital of France?",
        ]}
      />
      <MessageInput
        placeholder="Type your message here..."
        value={prompt}
        onKeyDown={(e) => {
          setPrompt(e.currentTarget.value);
        }}
        onChange={(e) => setPrompt(e.currentTarget.value)}
        onSubmit={(e) => {
            setPending(true);
          e.preventDefault();
        }}
        isGenerating={pending}
      />
    </div>
  );
}
