export default function ResumeAction() {
  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen w-screen border-t border-gray-primary">
      <div className="flex flex-col h-screen w-screen h-full items-center bg-white p-4 border border-gray-primary mb-4 rounded">
        <embed src="images/shanejamesresume.pdf" className="h-full w-full rounded" />
      </div>
    </div>
  );
}
