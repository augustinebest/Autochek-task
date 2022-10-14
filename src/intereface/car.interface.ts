export interface ICar {
  id: string;
  title: string;
  imageUrl: string;
  year: number;
  city: string;
  state: string;
  gradeScore: number;
  sellingCondition: string;
  hasWarranty: boolean;
  marketplacePrice: number;
  marketplaceOldPrice: number;
  hasFinancing: boolean;
  mileage: number;
  mileageUnit: string;
  installment: number;
  depositReceived: boolean;
  loanValue: number;
  websiteUrl: string;
  stats: {
    webViewCount: number;
    webViewerCount: number;
    interestCount: number;
    testDriveCount: number;
    appViewCount: number;
    appViewerCount: number;
    processedLoanCount: number;
  };
  bodyTypeId: number;
  sold: boolean;
  hasThreeDImage: boolean;
  licensePlate: string;
  transmission: string;
  fuelType: string;
  marketplaceVisibleDate: string;
}

export interface ICarData {
  result: ICar[];
  pagination: {
    total: number;
    currentPage: number;
    pageSize: number;
  };
}
