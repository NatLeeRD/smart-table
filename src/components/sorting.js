/*import {sortCollection, sortMap} from "../lib/sort.js";

export function initSorting(columns) {
    return (data, state, action) => {
        let field = null;
        let order = null;

        if (action && action.name === 'sort') {
            // @todo: #3.1 — запомнить выбранный режим сортировки

            // @todo: #3.2 — сбросить сортировки остальных колонок
        } else {
            // @todo: #3.3 — получить выбранный режим сортировки
        }

        return sortCollection(data, field, order);
    }
}*/

import {sortCollection, sortMap} from "../lib/sort.js";

export function initSorting(columns) {
    return (data, state, action) => {
        let field = null;
        let order = null;

        if (action && action.name === 'sort') {

            // @todo: #3.1
            action.dataset.value = sortMap[action.dataset.value];
            field = action.dataset.field;
            order = action.dataset.value;

            // @todo: #3.2
            columns.forEach(column => {
                if (column.dataset.field !== action.dataset.field) {
                    column.dataset.value = 'none';
                }
            });

        } else {

            // @todo: #3.3
            columns.forEach(column => {
                if (column.dataset.value !== 'none') {
                    field = column.dataset.field;
                    order = column.dataset.value;
                }
            });

        }

        return sortCollection(data, field, order);
    }
}