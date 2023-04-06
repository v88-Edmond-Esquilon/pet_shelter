
export const validateField = (field_name, value) => {
    if (value.length < 3) {
        return {
            field: field_name,
            message: `${field_name.replace("_", " ").charAt(0).toUpperCase()}${field_name.replace("_", " ").slice(1)} must be at least 3 characters.`,
        };
    }
    return {
        field: field_name,
        message: ""
    };
}