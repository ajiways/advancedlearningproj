import { Currency } from "../entities/currency.entity";
import { CustomExcteption } from "../exceptions/custom.exception";
import { RequestInterface } from "../infterfaces/request.interface";
import { CurrenciesService } from "../services/currencies.service";

export class CurrenciesController {
   private readonly currenciesService: CurrenciesService;

   constructor(currenciesService: CurrenciesService) {
      this.currenciesService = currenciesService;
   }

   async getAllCurrencies(): Promise<Currency[]> {
      return this.currenciesService.findAll();
   }

   async getCurrencyById(request: RequestInterface): Promise<Currency> {
      if (!request.body || !request.params.id || !Number(request.params.id)) {
         throw CustomExcteption.BadRequest("No params for this request was provided");
      }
      return this.currenciesService.findOne(Number(request.params.id));
   }
}
