const CustomButton = ({ text, link }: { text: string; link: string }) => {
  return (
    <div>
      <a
        href={link}
        className="inline-block bg-dark text-light px-4 py-2 rounded-md hover:bg-orange active:scale-95 transition-transform font-primary-family"
      >
        {text}
      </a>
    </div>
  );
};
export default CustomButton;
