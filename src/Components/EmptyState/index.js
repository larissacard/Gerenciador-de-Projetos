import React from "react";

import { 
    Search,
    EmptyState 
} from './styles'

function SearchEmptyState (Props) {
    return (
        <Search>
            <EmptyState />
            <span>{Props.titulo}</span>
        </Search>
    )
}

export default SearchEmptyState;