import css from './Filter.module.scss';

const Filter = ({ onFilter }) => {
    return (
        <label className={css['filter-label']}>
            <span>Find contacts by name</span>
            <input
                onChange={onFilter}
                type="text"
                name="filter"
                className={css['filter-input']} />
        </label>
    );
};

export default Filter;