using bookshop from '../db/schema';

service MyService {

    entity Books as projection on bookshop.Books;

}
