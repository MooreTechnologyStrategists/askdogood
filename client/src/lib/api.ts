// Simple API client for Clinical Recipes
// This is a placeholder - the actual API calls should be handled by the backend

interface ApiClient {
  recipes: {
    list: () => Promise<any[]>;
    create: (data: any) => Promise<any>;
    update: (id: number, data: any) => Promise<any>;
    delete: (id: number) => Promise<void>;
  };
}

export const apiClient: ApiClient = {
  recipes: {
    list: async () => {
      // TODO: Implement actual API call
      return [];
    },
    create: async (data: any) => {
      // TODO: Implement actual API call
      return data;
    },
    update: async (id: number, data: any) => {
      // TODO: Implement actual API call
      return { id, ...data };
    },
    delete: async (id: number) => {
      // TODO: Implement actual API call
      return;
    },
  },
};
