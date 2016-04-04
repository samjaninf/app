'use strict';

import { Mongo } from 'meteor/mongo';
import { Match, check } from 'meteor/check';
import { isString } from 'mout/lang';
import { extend } from 'lodash';
import QueryBuilder from '../classes/QueryBuilder';
import Api from '../Api';

export default (model, collection) => {
    check(collection, Match.OneOf(
        Mongo.Collection,
        String
    ));

    let c;

    // Create collection
    if (isString(collection)) {
        c = new Mongo.Collection(collection, api);
    } else {
        c = collection;
    }

    // Transform document to extend opts.Document
    c._transform = (doc) => new model(doc);

    // Query builder
    c.query = () => new QueryBuilder(model);

    // Extend model with the collection
    extend(model, c);
};
