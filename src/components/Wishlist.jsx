// const Wishlist = () => {
//   return (
//     <div className="container">
//       <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold dark:text-white my-4">
//         My <span className="my-blue">Wishlist</span>
//       </h1>

//       <div className="flex items-center justify-center">
//         <div className="table w-[70%] dark:text-white bg-red-500">
//           <div className="table-header-group text-xl font-bold">
//             <div className="table-row mb-4">
//               <div className="table-cell text-left">Photo</div>
//               <div className="table-cell text-left">Car Name</div>
//               <div className="table-cell text-left">Price</div>
//               <div className="table-cell text-left">Status</div>
//             </div>
//           </div>

//           <div className="table-row-group">
//             <div className="table-row flex items-center">
//               <div className="table-cell size-[10%]">
//                 <img className="size-full object-cover"
//                   src="https://wallpapercat.com/w/middle-retina/5/f/9/157932-3840x2160-desktop-4k-range-rover-wallpaper-image.jpg"
//                   alt="car"
//                 />
//               </div>
//               <div className="table-cell">
//                 The Sliding Mr. Bones (Next Stop, Pottersville)
//               </div>
//               <div className="table-cell">Malcolm Lockyer</div>
//               <div className="table-cell">1961</div>
//             </div>

//             <div className="table-row">
//               <div className="table-cell size-[10%]">
//                 <img className="size-full object-cover"
//                   src="https://wallpapercat.com/w/middle-retina/5/f/9/157932-3840x2160-desktop-4k-range-rover-wallpaper-image.jpg"
//                   alt="car"
//                 />
//               </div>
//               <div className="table-cell">Witchy Woman</div>
//               <div className="table-cell">The Eagles</div>
//               <div className="table-cell">1972</div>
//             </div>

//             <div className="table-row">
//               <div className="table-cell size-[10%]">
//                 <img className="size-full object-cover"
//                   src="https://wallpapercat.com/w/middle-retina/5/f/9/157932-3840x2160-desktop-4k-range-rover-wallpaper-image.jpg"
//                   alt="car"
//                 />
//               </div>
//               <div className="table-cell">Shining Star</div>
//               <div className="table-cell">Earth, Wind, and Fire</div>
//               <div className="table-cell">1975</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Wishlist;

import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Name", "Role", "Email", "Location"];

const TABLE_ROWS = [
  {
    name: "Mary Smith",
    role: "Project Manager",
    email: "mary.smith@example.com",
    location: "New York, USA",
  },
  {
    name: "Bob Johnson",
    role: "Lead Developer",
    email: "bob.johnson@example.com",
    location: "London, UK",
  },
  {
    name: "Carol White",
    role: "UX Designer",
    email: "carol.white@example.com",
    location: "Berlin, Germany",
  },
  {
    name: "David Brown",
    role: "QA Engineer",
    email: "david.brown@example.com",
    location: "Sydney, Australia",
  },
];

function Wishlist() {
  return (
    <section className="w-full bg-white">
      <div className="p-6">
        <Typography variant="lead" color="blue-gray" className="font-bold">
          Team members and roles
        </Typography>
        <Typography className="mb-4 w-80 font-normal text-gray-600 md:w-full">
          Overview of the key personnel involved in our project and their
          geographical distribution.
        </Typography>
      </div>
      <Card className="h-full w-full overflow-scroll border border-gray-300 px-6">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-b border-gray-300 pb-4 pt-10">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-bold leading-none"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(({ name, role, email, location }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast ? "py-4" : "py-4 border-b border-gray-300";

              return (
                <tr key={name} className="hover:bg-gray-50">
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-bold"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      className="font-normal text-gray-600"
                    >
                      {role}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      className="font-normal text-gray-600"
                    >
                      {email}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      className="font-normal text-gray-600"
                    >
                      {location}
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </section>
  );
}

export default Wishlist;
