import "../../index.css";
import Category from "./Category.jsx";
function Categories({ mobile }) {
  const categorieslist = [
  { id: 1, categoryName: "Programming" },
  { id: 2, categoryName: "Web Development" },
  { id: 3, categoryName: "React" },
  { id: 4, categoryName: "Node.js" },
  { id: 5, categoryName: "JavaScript" },
  { id: 6, categoryName: "TypeScript" },
  { id: 7, categoryName: "Python" },
  { id: 8, categoryName: "Java" },
  { id: 9, categoryName: "C++" },
  { id: 10, categoryName: "Data Structures" },
  { id: 11, categoryName: "Algorithms" },
  { id: 12, categoryName: "Machine Learning" },
  { id: 13, categoryName: "Artificial Intelligence" },
  { id: 14, categoryName: "Data Science" },
  { id: 16, categoryName: "DevOps" },
  { id: 17, categoryName: "Cloud Computing" },
  { id: 18, categoryName: "Cyber Security" },
  { id: 19, categoryName: "Mobile Development" },
  { id: 20, categoryName: "UI/UX Design" },
  { id: 21, categoryName: "Databases" },
  { id: 22, categoryName: "System Design" },
  { id: 23, categoryName: "Competitive Programming" },
  { id: 24, categoryName: "Interview Preparation" },
];
  return (
    <div
      className="
        w-full
        bg-transparent
        flex 
        items-center
        gap-2
        overflow-x-auto
        whitespace-nowrap
        no-scrollbar        
      ">
      {categorieslist.map((category) => (
        <Category
          key={category.id}
          id={`category-${category.id}`}
          categoryName={category.categoryName}
          mobile={mobile}
        />
      ))}
    </div>
  );
}

export default Categories;
