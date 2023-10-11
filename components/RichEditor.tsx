/**
 * v0 by Vercel.
 * @see https://v0.dev/t/4D5CdhA
 */
import { Button } from "@/components/ui/button";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

export default function RichEditor({
  value,
  setValue,
  title,
  setTitle,
  handleSubmit,
}: any) {
  return (
    <div className="w-full md:w-3/4 lg:w-1/2 xl:w-3/4 bg-white shadow-lg rounded-lg overflow-hidden p-4">
      <div className="justify-start p-4">
        <input
          value={title}
          type="text"
          placeholder="Title"
          className="w-full font-bold text-4xl border-none outline-none bg-transparent text-[#1a202c]"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <ReactQuill
          className="w-full h-full text-gray-600 dark:text-gray-200 text-md"
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Write something awesome..."
        />
        <div className="flex justify-between p-4">
          <Button className="bg-gray-200 text-black">Cancel</Button>
          <Button onClick={() => handleSubmit()}>Submit</Button>
        </div>
      </div>
    </div>
  );
}
