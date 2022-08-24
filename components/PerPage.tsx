import React, { useContext, useId, useState } from "react";
import { PaginationContext } from "../contexts/PaginationContext";
import Select from "react-select";
import { PerPageStyles } from "./styles/PerPage.styled";
import { TextStyles } from "./styles/PerPage.styled";

const options = [
    { value: 10, label: 10 },
    { value: 25, label: 25 },
    { value: 50, label: 50 },
];
export default function PerPage() {
    const { perPageToggler, perPage }: any = useContext(PaginationContext);

    return (
        <PerPageStyles>
            <TextStyles>Pagination:</TextStyles>
            <Select
                instanceId={useId()}
                defaultValue={perPage}
                onChange={(val) => perPageToggler(val)}
                options={options}
                placeholder="pagination"
            />
        </PerPageStyles>
    );
}
