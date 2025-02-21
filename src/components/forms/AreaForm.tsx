import { createArea, updateArea } from "@/lib/actions";
import { areaSchema, AreaSchema } from "@/lib/formValidationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import InputField from "../InputField";

const AreaForm = ({
  type,
  data,
  setOpen,
  relatedData,
}: {
  type: "create" | "update";
  data?: any;
  setOpen: Dispatch<SetStateAction<boolean>>;
  relatedData?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AreaSchema>({
    resolver: zodResolver(areaSchema),
  });
  const [state, formAction] = useFormState(
    type === "create" ? createArea : updateArea,
    {
      success: false,
      error: false,
    }
  );
  const onSubmit = handleSubmit((data) => {
    formAction(data);
  });
  const router = useRouter();

  useEffect(() => {
    if (state.success) {
      toast.success(
        `Area has been ${
          type === "create" ? "created" : "updated"
        } successfully!`
      );
      setOpen(false);
      router.refresh();
    }
  }, [state]);

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">
        {type === "create" ? "Create new area" : "Update the area"}
      </h1>
      <div className="flex flex-wrap -mx-3 mb-6">
        <InputField
          label="Area Name"
          name="name"
          defaultValue={data?.name}
          register={register}
          error={errors?.name}
        />
        {data && (
          <InputField
            label="Id"
            name="id"
            defaultValue={data?.id}
            register={register}
            error={errors?.id}
            hidden
          />
        )}
        <InputField
          label="Description Area"
          name="description"
          defaultValue={data?.description}
          register={register}
          error={errors?.description}
        />
      </div>

      <div className="flex justify-between flex-wrap gap-4">
        {state.error && (
          <span className="text-red-500">Something went wrong!</span>
        )}
        <button className="bg-blue-400 text-white p-2 rounded-md w-full">
          {type === "create" ? "Create" : "Update"}
        </button>
      </div>
    </form>
  );
};

export default AreaForm;
