import { ref, reactive, toRefs } from 'vue';

export const useForm = (initialValues = {}) => {
  const originalValues = { ...initialValues };
  const values = reactive({ ...initialValues });
  const errors = reactive({});
  const isLoading = ref(false);
  const isSending = ref(false);

  const reset = () => {
    Object.keys(values).forEach((key) => {
      delete values[key];
    });
    Object.entries(originalValues).forEach(([key, value]) => {
      values[key] = value;
    });
    clearErrors();
  };

  const addFields = (newFields) => {
    Object.entries(newFields).forEach(([key, value]) => {
      values[key] = value;
    });
  };

  const removeFields = (fieldKeys) => {
    fieldKeys.forEach((key) => {
      delete values[key];
      delete errors[key];
    });
  };

  const setErrors = (newErrors) => {
    Object.keys(errors).forEach((key) => {
      delete errors[key];
    });
    Object.entries(newErrors).forEach(([key, value]) => {
      errors[key] = value;
    });
  };

  const clearErrors = () => {
    Object.keys(errors).forEach((key) => {
      delete errors[key];
    });
  };

  const updateValues = (newValues) => {
    Object.entries(newValues).forEach(([key, value]) => {
      if (key in values) {
        values[key] = value;
      }
    });
  };

  const hasErrors = () => {
    return Object.keys(errors).length > 0;
  };

  const setLoading = (state) => {
    isLoading.value = state;
  };

  const setSending = (state) => {
    isSending.value = state;
  };

  return {
    values: toRefs(values),
    errors: toRefs(errors),
    isLoading,
    isSending,
    reset,
    addFields,
    removeFields,
    setErrors,
    clearErrors,
    updateValues,
    hasErrors,
    setLoading,
    setSending,
  };
};
