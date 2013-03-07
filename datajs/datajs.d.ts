// Type definitions for datajs 1.1.0
// Project: http://datajs.codeplex.com/
// Definitions by: George Compton <https://github.com/gcompton>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/** Interfaces for the objects produced and consumed by the datajs library.

The library's documentation does not describe or even mention most of these
interfaces, so they were created by inspecting the code.  This means that
these definitions may not match future versions of the library.

This file omits some interfaces and variables exposed by the library as they
are not needed by the client code.

@see http://datajs.codeplex.com/
*/
declare module datajs {

    /** An element type that may contain Documentation children.

    The way datajs handles Documentation elements appears to conflict with the
    CSDL standard.  It permits Documentation elements as children of any
    recognized element type, while the standard limits restricts them to only
    appearing as children of specific element types.  datajs permits more than
    one Documentation child per element, while the standard permits only one.
    Finally, datajs expects only text content in the Documentation, while the
    standard permits a pair of optional child elements.  This definition file
    matches the datajs behavior.

    @see [CSDL] Section 2.3 The edm:Documentation Element
    */
    interface Documentable {
        documentation?: Documentation[];
    }

    /** An element type that may contain unrecognized attributes and child
    elements.
    
    In datajs, all recognized element types may contain unrecognized attributes
    and child elements, which are stored in the extensions parameter.
    */
    interface Extensible {
        extensions?: Extension[];
    }

    /** An unrecognized attribute or child element. */
    interface Extension {
        name: string;
        namespace?: string;
        namespaceURI?: string;
        value: string;
        attributes?: Extension[];
        children?: Extension[];
    }

    interface Annotations extends Documentable, Extensible {
        target?: string;
        qualifier?: string;
        typeAnnotation?: TypeAnnotation[];
        valueAnnotation?: ValueAnnotation[];
    };

    /** A placeholder for the AnnotationsReference element type.
    
    datajs does not currently define a schema for these elements, so it falls
    back to creating Extension objects when they appear.  However, this may be
    an oversight, so this placeholder was created to make it easier to switch
    types if datajs adds specialized handling in the future. */
    interface AnnotationsReference extends Extension {
    }

    interface Association extends Documentable, Extensible {
        name?: string;
        end?: End[];
        referentialConstraint?: ReferentialConstraint;
        typeAnnotation?: TypeAnnotation[];
        valueAnnotation?: ValueAnnotation[];
    };

    interface AssociationSet extends Documentable, Extensible {
        name?: string;
        association?: string;
        end?: End[];
        typeAnnotation?: TypeAnnotation[];
        valueAnnotation?: ValueAnnotation[];
    };

    interface Binary extends Documentable, Extensible {
        text?: string;
    };

    interface Bool extends Documentable, Extensible {
        text?: string;
    };

    interface Collection extends Documentable, Extensible {
        string?: String[];
        int?: Int[];
        float?: Float[];
        decimal?: Decimal[];
        bool?: Bool[];
        dateTime?: DateTime[];
        dateTimeOffset?: DateTimeOffset[];
        guid?: Guid[];
        binary?: Binary[];
        time?: Time[];
        collection?: Collection[];
        record?: Record[];
    };

    interface CollectionType extends Documentable, Extensible {
        elementType?: string;
        nullable?: string;
        defaultValue?: string;
        maxLength?: string;
        fixedLength?: string;
        precision?: string;
        scale?: string;
        unicode?: string;
        collation?: string;
        SRID?: string;
        collectionType?: CollectionType;
        referenceType?: ReferenceType;
        rowType?: RowType;
        typeRef?: TypeRef;
    };

    interface ComplexType extends Documentable, Extensible {
        name?: string;
        baseType?: string;
        abstract?: string;
        property?: Property[];
        typeAnnotation?: TypeAnnotation[];
        valueAnnotation?: ValueAnnotation[];
    };

    interface DateTime extends Documentable, Extensible {
        text?: string;
    };

    interface DateTimeOffset extends Documentable, Extensible {
        text?: string;
    };

    interface Decimal extends Documentable, Extensible {
        text?: string;
    };

    interface DefiningExpression extends Documentable, Extensible {
        text?: string;
    };

    interface Dependent extends Documentable, Extensible {
        role?: string;
        propertyRef?: PropertyRef[];
    };

    interface Documentation extends Documentable, Extensible {
        text?: string;
    };

    interface End extends Documentable, Extensible {
        type?: string;
        role?: string;
        multiplicity?: string;
        entitySet?: string;
        onDelete?: OnDelete;
    };

    interface EntityContainer extends Documentable, Extensible {
        name?: string;
        extends?: string;
        entitySet?: EntitySet[];
        associationSet?: AssociationSet[];
        functionImport?: FunctionImport[];
        typeAnnotation?: TypeAnnotation[];
        valueAnnotation?: ValueAnnotation[];
    };

    interface EntitySet extends Documentable, Extensible {
        name?: string;
        entityType?: string;
        typeAnnotation?: TypeAnnotation[];
        valueAnnotation?: ValueAnnotation[];
    };

    interface EntityType extends Documentable, Extensible {
        name?: string;
        baseType?: string;
        abstract?: string;
        openType?: string;
        key?: Key;
        property?: Property[];
        navigationProperty?: NavigationProperty[];
        typeAnnotation?: TypeAnnotation[];
        valueAnnotation?: ValueAnnotation[];
    };

    interface EnumType extends Documentable, Extensible {
        name?: string;
        underlyingType?: string;
        isFlags?: string;
        member?: Member[];
    };

    interface Float extends Documentable, Extensible {
        text?: string;
    };

    interface Function extends Documentable, Extensible {
        // The returnType property will be a string if it was set by an
        // attribute or ReturnType if it was set by a child element.
        // Typescript doesn't allow a property to permit two specific types,
        // so returnType must be type "any".
        name?: string;
        returnType?: any;
        parameter?: Parameter[];
        definingExpression?: DefiningExpression;
        typeAnnotation?: TypeAnnotation[];
        valueAnnotation?: ValueAnnotation[];
    };

    interface FunctionImport extends Documentable, Extensible {
        // The returnType property will be a string if it was set by an
        // attribute or ReturnType if it was set by a child element.
        // Typescript doesn't allow a property to permit two specific types,
        // so returnType must be type "any".
        name?: string;
        returnType?: any;
        entitySet?: string;
        isSideEffecting?: string;
        isComposable?: string;
        isBindable?: string;
        entitySetPath?: string;
        parameter?: Parameter[];
        typeAnnotation?: TypeAnnotation[];
        valueAnnotation?: ValueAnnotation[];
    };

    interface Guid extends Documentable, Extensible {
        text?: string;
    };

    interface Int extends Documentable, Extensible {
        text?: string;
    };

    interface Key extends Documentable, Extensible {
        propertyRef?: PropertyRef[];
    };

    interface LabeledElement extends Documentable, Extensible {
        name?: string;
        path?: Path;
        string?: String;
        int?: Int;
        float?: Float;
        decimal?: Decimal;
        bool?: Bool;
        dateTime?: DateTime;
        dateTimeOffset?: DateTimeOffset;
        guid?: Guid;
        binary?: Binary;
        time?: Time;
        collection?: Collection;
        record?: Record;
        labeledElement?: LabeledElement;
        null?: Null;
    };

    interface Member extends Documentable, Extensible {
        name?: string;
        value?: string;
    };

    interface NavigationProperty extends Documentable, Extensible {
        name?: string;
        relationship?: string;
        toRole?: string;
        fromRole?: string;
        containsTarget?: string;
        typeAnnotation?: TypeAnnotation[];
        valueAnnotation?: ValueAnnotation[];
    };

    interface Null extends Documentable, Extensible {
    };

    interface OnDelete extends Documentable, Extensible {
        action?: string;
    };

    interface Path extends Documentable, Extensible {
        text?: string;
    };

    interface Parameter extends Documentable, Extensible {
        name?: string;
        type?: string;
        mode?: string;
        nullable?: string;
        defaultValue?: string;
        maxLength?: string;
        fixedLength?: string;
        precision?: string;
        scale?: string;
        unicode?: string;
        collation?: string;
        concurrencyMode?: string;
        SRID?: string;
        collectionType?: CollectionType;
        referenceType?: ReferenceType;
        rowType?: RowType;
        typeRef?: TypeRef;
        typeAnnotation?: TypeAnnotation[];
        valueAnnotation?: ValueAnnotation[];
    };

    interface Principal extends Documentable, Extensible {
        role?: string;
        propertyRef?: PropertyRef[];
    };

    interface Property extends Documentable, Extensible {
        name?: string;
        type?: string;
        nullable?: string;
        defaultValue?: string;
        maxLength?: string;
        fixedLength?: string;
        precision?: string;
        scale?: string;
        unicode?: string;
        collation?: string;
        concurrencyMode?: string;
        collectionKind?: string;
        SRID?: string;
        collectionType?: CollectionType;
        referenceType?: ReferenceType;
        rowType?: RowType;
        typeAnnotation?: TypeAnnotation[];
        valueAnnotation?: ValueAnnotation[];
    };

    interface PropertyRef extends Documentable, Extensible {
        name?: string;
    };

    interface PropertyValue extends Documentable, Extensible {
        // There should be exactly one property.  It will be a string if it
        // was set by an attribute or it will be a Binary, Decimal, etc if it
        // was set by a child element.  Typescript doesn't allow a property to
        // permit two specific types, so the properties that may be set by
        // attributes must be type "any".
        property?: any;
        path?: any;
        string?: any;
        int?: any;
        float?: any;
        decimal?: any;
        bool?: any;
        dateTime?: any;
        dateTimeOffset?: any;
        guid?: any;
        binary?: any;
        time?: any;
        collection?: Collection;
        record?: Record;
        labeledElement?: LabeledElement;
        null?: Null;
    };

    /** A placeholder for the Record element type.
    
    datajs does not currently define a schema for these elements, so it falls
    back to creating Extension objects when they appear.  However, this may be
    an oversight, so this placeholder was created to make it easier to switch
    types if datajs adds specialized handling in the future. */
    interface Record extends Extension {
    }

    /** A placeholder for the Reference element type.
    
    datajs does not currently define a schema for these elements, so it falls
    back to creating Extension objects when they appear.  However, this may be
    an oversight, so this placeholder was created to make it easier to switch
    types if datajs adds specialized handling in the future. */
    interface Reference extends Extension {
    }

    interface ReferenceType extends Documentable, Extensible {
        type?: string;
    };

    interface ReferentialConstraint extends Documentable, Extensible {
        principal?: Principal;
        dependent?: Dependent;
    };

    interface ReturnType extends Documentable, Extensible {
        returnType?: string;
        type?: string;
        entitySet?: string;
        collectionType?: CollectionType;
        referenceType?: ReferenceType;
        rowType?: RowType;
    };

    interface RowType extends Documentable, Extensible {
        property?: Property[];
    };

    interface String extends Documentable, Extensible {
        text?: string;
    };

    interface Schema extends Documentable, Extensible {
        namespace?: string;
        alias?: string;
        using?: Using[];
        entityContainer?: EntityContainer[];
        entityType?: EntityType[];
        association?: Association[];
        complexType?: ComplexType[];
        function?: Function[];
        valueTerm?: ValueTerm[];
        annotations?: Annotations[];
    };

    interface Time extends Documentable, Extensible {
        text?: string;
    };

    interface TypeAnnotation extends Documentable, Extensible {
        term?: string;
        qualifier?: string;
        propertyValue?: PropertyValue[];
    };

    interface TypeRef extends Documentable, Extensible {
        type?: string;
        nullable?: string;
        defaultValue?: string;
        maxLength?: string;
        fixedLength?: string;
        precision?: string;
        scale?: string;
        unicode?: string;
        collation?: string;
        SRID?: string;
    };

    interface Using extends Documentable, Extensible {
        namespace?: string;
        alias?: string;
    };

    interface ValueAnnotation extends Documentable, Extensible {
        // There should be exactly one property aside from term.  It will be a
        // string if it was set by an attribute or it will be a Binary,
        // Decimal, etc if it was set by a child element.  Typescript doesn't
        // allow a property to permit two specific types, so the properties
        // that may be set by attributes must be type "any".
        term?: string;
        qualifier?: string;
        path?: any;
        string?: any;
        int?: any;
        float?: any;
        decimal?: any;
        bool?: any;
        dateTime?: any;
        dateTimeOffset?: any;
        guid?: any;
        binary?: any;
        time?: any;
        collection?: Collection;
        record?: Record;
        labeledElement?: LabeledElement;
        null?: Null;
    };

    interface ValueTerm extends Documentable, Extensible {
        name?: string;
        type?: string;
        typeAnnotation?: TypeAnnotation[];
        valueAnnotation?: ValueAnnotation[];
    };

    interface Edmx extends Documentable, Extensible {
        version?: string;
        dataServices?: DataServices;
        reference?: Reference[];
        annotationsReference?: AnnotationsReference[];
    };

    interface DataServices extends Documentable, Extensible {
        schema?: Schema[];
    };

}

/** Interfaces for the objects produced and consumed by the datajs library.

The library's documentation does not describe or even mention most of these
interfaces, so they were created by inspecting the code.  This means that
these definitions may not match future versions of the library.

This file omits some interfaces and variables exposed by the library as they
are not needed by the client code.

@see http://datajs.codeplex.com/
*/
declare module OData {

    /** Object with an 'abort' method for the operation. */
    interface Abortable {
        abort(): void;
    };

    interface Handler {
    }

    interface HttpClient {
        /** Performs a network request.</summary>

        @param request Request description.
        @param success Success callback with the response object.
        @param error Error callback with an error object.
        */
        request(request: HttpRequest, success?: (data, response) => void , error?: (error) => void ): Abortable;
    };

    interface HttpRequest {
        /** object that contains HTTP headers as name value pairs */
        headers?: Object;

        /** OData endpoint URI. */
        requestUri?: string;

        /** HTTP method (GET, POST, PUT, DELETE). */
        method?: string;

        /** Payload of the request (in intermediate format). */
        data?: Object;

        /** Username to send for BASIC authentication. */
        user?: string;

        /** Password to send for BASIC authentication. */
        password?: string;
    };

    interface HttpResponse {
    };

    /** Default callback function for APIs that succeed. */
    export function defaultSuccess(data, response: HttpResponse): void;

    /** Default callback function for APIs that fail. */
    export function defaultError(error, response?: HttpResponse): void;

    var defaultHandler: Handler;
    var defaultHttpClient: HttpClient;
    var defaultMetadata: datajs.Edmx;
    var metadataHandler: Handler;

    /** Reads data from the specified URL.

    @param url URL to read data from.
    @param success Callback for a successful read operation.
    @param error Callback for handling errors.
    @param handler Handler for data serialization.
    @param httpClient HTTP client layer.
    @param metadata Conceptual metadata for this request.
    */
    export function read(
        url: string,
        success?: (data, response: HttpResponse) => void ,
        error?: (error) => void ,
        handler?: Handler,
        httpClient?: HttpClient,
        metadata?: datajs.Edmx): void;

    /** Reads data returned by the specified request.

    @param request An object defining the HTTP request.
    @param success Callback for a successful read operation.
    @param error Callback for handling errors.
    @param handler Handler for data serialization.
    @param httpClient HTTP client layer.
    @param metadata Conceptual metadata for this request.
    */
    export function read(
        request: HttpRequest,
        success?: (data, response: HttpResponse) => void ,
        error?: (error) => void ,
        handler?: Handler,
        httpClient?: HttpClient,
        metadata?: datajs.Edmx);

}
