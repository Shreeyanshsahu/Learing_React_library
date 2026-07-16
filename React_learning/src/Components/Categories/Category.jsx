function Category({ id, categoryName }) {
  return (
    <button
      id={id}
      className="
        shrink-0
        min-w-30
        px-4
        py-1

        flex
        items-center
        justify-center

        rounded-full

        bg-white/10
        backdrop-blur-xl
        border border-white/15

        shadow-lg
        shadow-black/20

        text-white
        font-medium
        text-sm

        transition-all
        duration-300
        ease-in-out

        hover:bg-[#7e82f1]
        hover:scale-105
        active:scale-95
      "
    >
      {categoryName}
    </button>
  );
}

export default Category;