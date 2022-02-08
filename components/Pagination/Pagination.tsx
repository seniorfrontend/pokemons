import { PAGINATION_STEP } from 'constants/constants';
import React from 'react';

import * as Styling from "./pagination-styling"

interface Iprops {
    totalCount?: number;
    paginationStep?: number;
    onPageChange: (page: number) => void;
}

function Pagination({ totalCount = 0, paginationStep = PAGINATION_STEP, onPageChange }: Iprops) {
    const [currentPage, setCurrentPage] = React.useState<number>(0);

    const totalPages = React.useMemo(() => {
        return Math.ceil(totalCount / paginationStep)
    }, [totalCount, paginationStep]);

    const pagesList = React.useMemo(() => {
        const startSlicing = (currentPage - 5) >= 0 ? currentPage - 5 : 0;
        const endSlicing  = currentPage + 5;
        return Array.from(Array(totalPages).keys()).slice(startSlicing, endSlicing);
    }, [totalPages, currentPage]);

    if (!Array.isArray(pagesList) || pagesList.length <= 1) {
        return null
    }

    const paginationHandler = (page: number) => () => {
        setCurrentPage(page)
        onPageChange(page)
    }

    return (
        <Styling.Container>
            <Styling.Item onClick={paginationHandler(0)}>
                First
            </Styling.Item>
            {pagesList.map(page => (
                <Styling.Item key={page} isActive={page === currentPage} onClick={paginationHandler(page)}>
                    {page + 1}
                </Styling.Item>
            ))}
            <Styling.Item onClick={paginationHandler(totalPages - 1)}>
                Last
            </Styling.Item>
        </Styling.Container>
    );
}

export default Pagination;
