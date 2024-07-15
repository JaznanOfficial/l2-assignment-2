import { IoMdNotifications } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const Notifications = () => {
  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="relative">
            <IoMdNotifications size={32} />
            <p className="bg-[#FF3546] text-white size-6 leading-6 rounded-full absolute -top-1 -right-2 flex justify-center items-center text-sm">
              <span>11</span>
            </p>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="w-full md:w-[300px] left-2 shadow-lg bg-white"
        >
          <DropdownMenuLabel>Notifications</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup className="max-h-[350px] overflow-y-auto overflow-x-hidden">
            {arr.map((item) => (
              <>
                <DropdownMenuItem>
                  <div>
                    <div
                      //   onClick={() => handleOpenMessage(item)}
                      className="py-4"
                      key={item}
                    >
                      <div className="flex justify-between items-center">
                        <h3>John Smith Dela Cruz</h3>
                        <p>7:00 pm</p>
                      </div>
                      <p>Lorem ipsum dolor setar udiop daln</p>
                    </div>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
              </>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default Notifications;
