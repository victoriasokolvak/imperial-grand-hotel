import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Triangle } from "./ui/Triangle";

interface DropdownProps {
  options: number[];
  selected: number;
  onSelect: (value: number) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({ options, selected, onSelect }) => {
  return (
    <Menu as="div" className="relative w-full">
      <MenuButton className="bg-dark-accent text-accent text-[13px] xl:text-[14px] w-full py-3 px-4 flex justify-between items-center">
        {selected}
        <Triangle />
      </MenuButton>

      <MenuItems className="absolute mt-1 w-full bg-dark-accent text-accent z-10">
        {options.map((option) => (
          <MenuItem key={option}>
            {({ focus }) => (
              <button
                onClick={() => onSelect(option)}
                className={`w-full text-left px-4 py-3 ${focus ? "bg-hover" : ""}`}
              >
                {option}
              </button>
            )}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};
