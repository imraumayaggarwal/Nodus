"use client";

type AddButtonProps = {
  onClick?: () => void;
};

export default function AddButton({ onClick }: AddButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        fixed
        bottom-10
        right-10
        h-16
        w-16
        rounded-2xl
        border
        border-dashed
        bg-white
        text-4xl
        shadow-md
        shadow-black/15
        transition-all
        duration-300
        hover:rounded-3xl
        hover:-translate-y-1
        hover:shadow-xl
        hover:border-solid
        active:scale-95
        cursor-pointer
        select-none
      "
    >
      +
    </button>
  );
}