import Link from "next/link";
import React from "react";
// Event name, Host name, Start and End time/date, Location and Event photo.
function index() {
  return (
    <div className=" flex flex-col pt-4 container mx-auto px-4 gap-4">
      <p className="text-5xl md:text-6xl font-bold text-primary-1">
        Create a new{" "}
        <span className="bg-gradient-to-r bg-clip-text text-transparent to-primary-0 from-primary-3">
          Event
        </span>
      </p>
      <form className="flex flex-col gap-4">
        <Input label="Event Name" name="eventName" type="text" />
        <Input label="Host Name" name="hostName" type="text" />
        <Input label="Start Date" name="start" type="datetime-local" />
        <Input label="End Date" name="end" type="datetime-local" />
        <Input label="Location" name="location" type="text" />
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-primary-2 border-dashed rounded-md bg-white">
          <div className="space-y-1 text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex text-sm text-neutrals-0">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer bg-neutrals-5 rounded-md font-medium text-primary-3 hover:text-primary-3 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-3"
              >
                <span>Upload a file</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-neutrals-0">PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>
      </form>

      <Link href="/event">
        <a className="text-neutrals-5 bg-gradient-to-r to-primary-0 from-primary-3 mt-8 text-white font-semibold rounded-xl p-4 flex tracking-wide md:w-80 justify-center md:text-2xl">
          Next
        </a>
      </Link>
    </div>
  );
}

export default index;

// internal components

function Input({
  label,
  name,
  id = name,
  ...props
}: { label: string } & React.ComponentPropsWithoutRef<"input">) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-neutrals-0">
        {label}
      </label>
      <div className="mt-1">
        <input
          {...props}
          name={name}
          id={id}
          className="shadow-sm focus:ring-primary-3 focus:border-primary-3 block w-full sm:text-sm border-neutrals-3 rounded-md"
        />
      </div>
    </div>
  );
}
