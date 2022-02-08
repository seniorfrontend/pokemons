import { PAGINATION_STEP } from 'constants/constants';
import React from 'react';

import * as Styling from "./pagination-styling"

interface Iprops {
    totalCount?: number;
    paginationStep?: number;
    onPageChange: (page: number) => void;
}

function Pagination({ totalCount = 0, paginationStep = PAGINATION_STEP, onPageChange }: Iprops) {
    const [currentPage, setCurrentPage] = React.useState<number>(1);

    const totalPages = React.useMemo(() => {
        return Math.ceil(totalCount / paginationStep)
    }, [totalCount, paginationStep]);

    const pagesList = React.useMemo(() => {
        return Array.from(Array(totalPages).keys());
    }, [totalPages]);

    if (!Array.isArray(pagesList) || pagesList.length <= 1) {
        return null
    }

    const paginationHandler = (page: number) => () => {
        setCurrentPage(page)
        onPageChange(page)
    }

    return (
        <Styling.Container>
            {pagesList.map(page => (
                <Styling.Item key={page} isActive={page === currentPage} onClick={paginationHandler(page)}>
                    {page + 1}
                </Styling.Item>
            ))}
        </Styling.Container>
    );
}

export default Pagination;
