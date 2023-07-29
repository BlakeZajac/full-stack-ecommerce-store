"use client";

import { useState } from "react";

import { Color, Size } from "@/types";
import Button from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import { Dialog } from "@headlessui/react";
import IconButton from "@/components/ui/icon-button";
import Filter from "./filter";

interface MobileFiltersProps {
  sizes: Size[];
  colors: Color[];
}

const MobileFilters: React.FC<MobileFiltersProps> = ({ sizes, colors }) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button className="flex items-center gap-x-2 lg:hidden" onClick={onOpen}>
        Filters <Plus size={20} />
      </Button>

      <Dialog
        open={open}
        as="div"
        className="relative z-40 lg:hidden"
        onClose={onClose}
      >
        {/* Dialog overlay */}
        <div className="fixed inset-0 bg-black bg-opacity-50" />

        {/* Dialog position */}
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-sm flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            {/* Close button */}
            <div className="flex items-center justify-between px-4 pb-2">
              <p>Filters</p>
              <IconButton icon={<X size={16} />} onClick={onClose} />
            </div>

            {/* Render the filters */}
            <div className="p-4">
              <Filter valueKey="sizeId" name="Size" data={sizes} />
              <Filter valueKey="colorId" name="Color" data={colors} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;
