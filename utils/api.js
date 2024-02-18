import { SERVER_URL } from "@/env";

export const sendClassTemplate = (postData) => {
  const apiUrl = SERVER_URL + "/send_class_template";
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  };

  fetch(apiUrl, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {})
    .catch((error) => {
      console.error("Error:", error);
    });
};

export async function getClassTemplates() {
  // Replace with your actual server URL
  const apiUrl = SERVER_URL + "/get_class_templates";

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(apiUrl, requestOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error:", error);
    return { message: "error", status: "failed" };
  }
}

export function startClass(post_data) {
  const apiUrl = SERVER_URL + "/send_class_data";
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post_data),
  };

  fetch(apiUrl, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {})
    .catch((error) => {
      console.error("Error:", error);
    });
}

export async function getClasses() {
  // Replace with your actual server URL
  const apiUrl = SERVER_URL + "/get_class_instances";

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(apiUrl, requestOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error:", error);
    return { message: "error", status: "failed" };
  }
}

export const RegisterStudent = async (postData) => {
  const apiUrl = SERVER_URL + "/register_student";
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  };

  try {
    const response = await fetch(apiUrl, requestOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const registerLecturer = async (postData) => {
  const apiUrl = SERVER_URL + "/register_lecturer";
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  };

  try {
    const response = await fetch(apiUrl, requestOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error; // Re-throw the error to propagate it to the next catch block
  }
};

export const signStudent = async (postData) => {
  const apiUrl = SERVER_URL + "/sign_student";
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  };

  try {
    const response = await fetch(apiUrl, requestOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const signLecturer = async (postData) => {
  const apiUrl = SERVER_URL + "/sign_lecturer";
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  };

  try {
    const response = await fetch(apiUrl, requestOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export async function getStudentClasses(course_name, group, level) {
  // Replace with your actual server URL
  const apiUrl =
    SERVER_URL +
    `/get_student_classes?course_name=${course_name}&group=${group}&level=${level}`;

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(apiUrl, requestOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data.data;
  } catch (error) {
    console.error("Error:", error);
    return { message: "error", status: "failed" };
  }
}

export async function getLecturerClasses(lecturer_id) {
  const apiUrl =
    SERVER_URL + `/get_lecturer_classes?lecturer_id=${lecturer_id}`;

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(apiUrl, requestOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data.data;
  } catch (error) {
    console.error("Error:", error);
    return { message: "error", status: "failed" };
  }
}
